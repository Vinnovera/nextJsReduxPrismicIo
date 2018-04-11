import { createActions } from 'reduxsauce'

const { Creators, Types } = createActions({
  incrementCount: ['value'],
  decrementCount: ['value']
})

export { Creators, Types }
