import { combineReducers } from 'redux';
import  galleryReducer  from './galleryPage/duck/reducers'
import  homeReducer  from './homePage/duck/reducers'

const rootReducer = combineReducers({
  home: homeReducer,
  gallery: galleryReducer
});

export default rootReducer;