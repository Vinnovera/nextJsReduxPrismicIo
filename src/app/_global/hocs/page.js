/**
 * This HOC connects a container with the Redux store
 *
 * A Wrapped COmponent can be a Container and can have it's own getInitialProps
 * that will be run here, a good place to dispatch actions for fetching
 * initial content or data.
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { initStore } from '../../store'

export default (WrappedComponent) => {
  return class extends Component {
    static async getInitialProps (ctx) {
      /*** Cannot use ctx.req when exporting to static files *****/
      // const { req } = ctx
      // const isServer = !!req
      // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
      // const store = initStore({}, isServer)
      const store = initStore({})
      let pageProps = {}
      if (WrappedComponent.getInitialProps) {
        pageProps = await WrappedComponent.getInitialProps({...ctx, store})
      }
      return {
        ...pageProps,
        initialState: store.getState()
        // isServer,
        // userAgent
      }
    }

    constructor (props) {
      super(props)
      this.store = initStore(props.initialState, props.isServer)
    }

    render () {
      return (
        <div>
          <Provider store={this.store}>
            <WrappedComponent {...this.props} />
          </Provider>
        </div>
      )
    }
  }
}
