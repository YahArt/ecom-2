const space = '9eeicl4ji0wj';
const accessToken = 'coeyLt7jcjJU2_s1JZL5UTdRyQbUM8k2yz-mTOBeLiU';
const contentful = require('contentful');
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: space,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: accessToken,
});

async function getProducts() {
  // GET request using fetch with async/await
  const result = await client.getEntries();
  const products = result.items.map((item, index) => {
    return {
      id: index,
      title: item.fields.title,
      image: `https:${item.fields.image.fields.file.url}`,
      description: item.fields.description,
    };
  });
  return products;
}

export { getProducts };
