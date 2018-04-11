import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../services/prismic'

/**
 * Will render a div with styled rich text
 * @param text
 * @returns {*}
 * @constructor
 */
function RichTextComponent ({ data }) {
  return RichText.render(data, linkResolver)
}

export default RichTextComponent
