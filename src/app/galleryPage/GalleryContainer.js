import { connect } from 'react-redux';
import GalleryComponent from './GalleryComponent';
import { galleryOperations } from './duck';

const mapStateToProps = state => {
  const { currentCount } = state.gallery;
  return { currentCount }
};

const mapDispatchToProps = dispatch => {
  // '2' is the number by which you want to increment the currentCount
  const onIncrementClick = () => dispatch(galleryOperations.incrementCount(2));
  const onDecrementClick = () => dispatch(galleryOperations.decrementCount(2));

  return {
    onIncrementClick,
    onDecrementClick
  }
};

const GalleryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryComponent);

GalleryContainer.getInitialProps = ({ store }) => {
  // start off by incrementing by 15 from start, this will be server-side rendered
  store.dispatch(galleryOperations.incrementCount(15))
}

export default GalleryContainer;