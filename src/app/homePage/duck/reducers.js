import types from './types';

const INITIAL_STATE = {
  currentCount: 0,
  subreddit: '',
  showRedditSpinner: false,
  subredditData: []
}
const homeReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case types.INCREMENT_COUNT: {
      const { value } = action;
      const { currentCount } = state;
      return {
        ...state,
        currentCount: currentCount + value
      }
    }

    case types.DECREMENT_COUNT: {
      const { value } = action;
      const { currentCount } = state;
      return {
        ...state,
        currentCount: currentCount - value
      }
    }

    case types.REQUEST_SUBREDDIT_JSON: {
      const { subreddit } = action;
      return {
        ...state,
        subreddit,
        subredditData: [],
        showRedditSpinner: true
      }
    }

    case types.RECEIVE_SUBREDDIT_JSON: {
      const { subredditData } = action;
      return {
        ...state,
        subredditData,
        showRedditSpinner: false

      }
    }

    default: return state;
  }
}

export default homeReducer;