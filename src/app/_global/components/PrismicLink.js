import { Link } from 'prismic-reactjs'
import { linkResolver } from '../services/prismic'

/**
 * Will render a link
 * @param text
 * @returns {*}
 * @constructor
 */
function LinkComponent ({ data, text }) {
  let target = {}
  if (data.target) {
    target = {
      target: data.target,
      rel: 'noopener'
    }
  }

  return (
    <a href={Link.url(data, linkResolver)} {...target}>{text}</a>
  )
}

export default LinkComponent
