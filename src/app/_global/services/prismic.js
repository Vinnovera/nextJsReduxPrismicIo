const Prismic = require('prismic-javascript');

// Secret environment variables
const PRISMIC_API_ENDPOINT = process.env.PRISMIC_API_ENDPOINT;
const PRISMIC_API_TOKEN = process.env.PRISMIC_API_TOKEN;

/**
 * Get all the documents of the type stated by key
 * from Prismic CMS
 *
 * @returns {array} The array of all documents of the type work
 */
export default async function getPrismicContent (key) {
  try {
    const api = await Prismic.getApi(PRISMIC_API_ENDPOINT, { accessToken: PRISMIC_API_TOKEN });
    const response = await api.query(Prismic.Predicates.at('document.type', key));
console.log(123, response.results)
    return response.results;
  } catch (err) {
    console.log(err)
  }
}
