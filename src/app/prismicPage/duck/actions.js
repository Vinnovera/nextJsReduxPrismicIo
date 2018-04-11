import { createActions } from 'reduxsauce'

const { Creators, Types } = createActions({
  requestPrismicContent: ['key'],
  receivePrismicContent: ['cmsContent']
})

export { Creators, Types }
