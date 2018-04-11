import { Creators } from './actions';
import { getPrismicContent } from '../../_global/services/prismic'

const requestPrismicContentAction = Creators.requestPrismicContent;
const receivePrismicContentAction = Creators.receivePrismicContent;

const fetchPrismicContent = (type, uid) => {
  return async dispatch => {
    try {

      dispatch(requestPrismicContentAction());

      const cmsContent = await getPrismicContent(type, uid)
      dispatch(receivePrismicContentAction(cmsContent))

    } catch (err) {
      console.log(err)
    }
  }
};

export default {
  fetchPrismicContent
}