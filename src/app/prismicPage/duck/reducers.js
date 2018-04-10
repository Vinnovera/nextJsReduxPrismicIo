import types from './types';

const INITIAL_STATE = {
  cmsContent: []
}
const prismicReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case types.REQUEST_PRISMIC_CONTENT: {
      return {
        ...state,
        cmsContent: [],
      }
    }

    case types.RECEIVE_PRISMIC_CONTENT: {
      const { cmsContent } = action;
      return {
        ...state,
        cmsContent,
      }
    }

    default:
      return state;
  }
}

export default prismicReducer;