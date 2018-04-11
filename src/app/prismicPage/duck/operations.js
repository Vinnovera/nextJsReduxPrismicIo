import { Creators } from './actions';
import getPrismicContent from '../../_global/services/prismic'

const requestPrismicContentAction = Creators.requestPrismicContent;
const receivePrismicContentAction = Creators.receivePrismicContent;

const fetchPrismicContent = (uid) => {
  return async dispatch => {
    try {

      dispatch(requestPrismicContentAction(uid));

      const cmsContent = await getPrismicContent(uid)
      dispatch(receivePrismicContentAction(cmsContent))

    } catch (err) {
      console.log(err)
    }
  }
};

export default {
  fetchPrismicContent
}