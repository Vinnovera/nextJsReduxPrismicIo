import { Creators } from './actions';
import getPrismicContent from '../../_global/services/prismic'

const requestPrismicContentAction = Creators.requestPrismicContent;
const receivePrismicContentAction = Creators.receivePrismicContent;

const fetchPrismicContent = (key) => {
  return async dispatch => {
    try {

      dispatch(requestPrismicContentAction(key));

      const cmsContent = await getPrismicContent(key)
      dispatch(receivePrismicContentAction(cmsContent))

    } catch (err) {
      console.log(err)
    }
  }
};

export default {
  fetchPrismicContent
}