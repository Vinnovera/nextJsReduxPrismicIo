import { connect } from 'react-redux';
import PrismicComponent from './PrismicComponent';
import { prismicOperations } from './duck';

const PRISMIC_CONTENT_TYPE = 'about';

const mapStateToProps = state => {
  const { cmsContent } = state.prismic;
  console.log(777, state.prismic)
  console.log(778, cmsContent)
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
  console.log(1111, isServer)
  await store.dispatch(prismicOperations.fetchPrismicContent(PRISMIC_CONTENT_TYPE))
  return { initialState: store.getState(), isServer }
  console.log(11112, isServer)
}

export default PrismicContainer;