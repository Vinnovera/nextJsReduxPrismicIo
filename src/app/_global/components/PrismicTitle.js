import { RichText } from 'prismic-reactjs'

/**
 * Will render a plain title tag with level set by the CMS, i.e. <h1>title text </h1>
 * @param text
 * @returns {*}
 * @constructor
 */
function TitleComponent ({ data }) {
  return RichText.render(data)
}

export default TitleComponent
