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
  return {
    id: entry.sys.id,
    title: entry.fields.title,
    image: `https:${entry.fields.image.fields.file.url}`,
    description: entry.fields.description,
  };
}

async function getProducts() {
  const result = await client.getEntries();
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

export { getProducts, getProductById };
