import types from './types';

const INITIAL_STATE = {
  currentCount: 100,
}
const galleryReducer = (state=INITIAL_STATE, action) => {
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

    default: return state;
  }
}

export default galleryReducer;