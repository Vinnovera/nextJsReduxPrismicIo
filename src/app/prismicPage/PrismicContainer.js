import { connect } from 'react-redux';
import PrismicComponent from './PrismicComponent';
import { prismicOperations } from './duck';

const PRISMIC_CONTENT_TYPE = 'about';

const mapStateToProps = state => {
  const { cmsContent } = state.prismic;
  return { cmsContent }
};

const mapDispatchToProps = dispatch => {
  return {}
};

const PrismicContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PrismicComponent);

PrismicContainer.getInitialProps = async ({ store, req }) => {
  const isServer = !!req
  await store.dispatch(prismicOperations.fetchPrismicContent(PRISMIC_CONTENT_TYPE))
  return { initialState: store.getState(), isServer }
}

export default PrismicContainer;