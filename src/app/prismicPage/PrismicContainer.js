import { connect } from 'react-redux'
import PrismicComponent from './PrismicComponent'
import { prismicOperations } from './duck'

const PRISMIC_CONTENT_TYPE = 'page'
const PRISMIC_CONTENT_UID = 'veggies'

const mapStateToProps = state => {
  const { cmsContent } = state.prismic
  return { cmsContent }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const PrismicContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PrismicComponent)

PrismicContainer.getInitialProps = async ({ store }) => {
  // const isServer = !!req
  await store.dispatch(prismicOperations.fetchPrismicContent(PRISMIC_CONTENT_TYPE, PRISMIC_CONTENT_UID))
  // return { initialState: store.getState(), isServer }
  return { initialState: store.getState() }
}

export default PrismicContainer
