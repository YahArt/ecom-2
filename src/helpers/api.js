const space = '9eeicl4ji0wj';
const accessToken = 'coeyLt7jcjJU2_s1JZL5UTdRyQbUM8k2yz-mTOBeLiU';
const contentful = require('contentful');
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: space,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: accessToken,
});

function convertEntryToProduct(entry) {
  const product = {
    id: entry.sys.id,
    title: entry.fields.title,
    image: `https:${entry.fields.image.fields.file.url}`,
    description: entry.fields.description,
    keyFeatures: entry.fields.keyFeatures?.features ?? [],
    comments: entry.fields.comments?.map(
      (comment) => convertEntryToComment(comment) ?? [],
    ),
  };
  return product;
}

function convertEntryToComment(entry) {
  return {
    id: entry.sys.id,
    user: entry.fields.user,
    title: entry.fields.title,
    date: new Date(entry.fields.date),
    message: entry.fields.message,
  };
}

async function getProducts() {
  const result = await client.getEntries({
    content_type: 'product',
  });
  const products = result.items.map((item) =>
    convertEntryToProduct(item),
  );
  return products;
}

async function getProductById(productId) {
  const result = await client.getEntry(productId);
  const product = convertEntryToProduct(result);
  return product;
}

async function getProductsByIds(productIds) {
  const allProducts = await getProducts();
  const products = [];
  for (let i = 0; i < productIds.length; i++) {
    const productId = productIds[i];
    const result = allProducts.find(
      (product) => product.id === productId,
    );
    products.push(result);
  }
  return products;
}

export { getProducts, getProductById, getProductsByIds };
