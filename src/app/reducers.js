import { combineReducers } from 'redux';
import galleryReducer from './galleryPage/duck/reducers'
import homeReducer from './homePage/duck/reducers'
import prismicReducer from './prismicPage/duck/reducers'

const rootReducer = combineReducers({
  home: homeReducer,
  gallery: galleryReducer,
  prismic: prismicReducer
});

export default rootReducer;