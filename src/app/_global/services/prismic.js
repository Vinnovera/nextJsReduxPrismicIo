const Prismic = require('prismic-javascript');

// Secret environment variables
const PRISMIC_API_ENDPOINT = process.env.PRISMIC_API_ENDPOINT;
const PRISMIC_API_TOKEN = process.env.PRISMIC_API_TOKEN;

/**
 * Get a document from Prismic based on given type and uid
 * @param type
 * @param uid
 * @returns {Promise<Document>}
 */
async function getPrismicContent (type, uid) {
  try {
    const api = await Prismic.getApi(PRISMIC_API_ENDPOINT, { accessToken: PRISMIC_API_TOKEN });
    return await api.getByUID(type, uid)
  } catch (err) {
    console.log(err)
  }
}


const linkResolver = function (doc) {
  // Pretty URLs for known types
  if (doc.type === 'blog') return "/post/" + doc.uid;
  if (doc.type === 'page') return "/" + doc.uid;
  // Fallback for other types, in case new custom types get created
  return "/doc/" + doc.id;
}

export { getPrismicContent, linkResolver }