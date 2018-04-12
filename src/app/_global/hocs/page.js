/**
 * This HOC connects a container with the Redux store
 *
 * A Wrapped Component can be a Container and can have it's own getInitialProps
 * that will be run here, a good place to dispatch actions for fetching
 * initial content or data.
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Head from 'next/head'

import { initStore } from '../../store'

export default (WrappedComponent) => {
  return class extends Component {
    static async getInitialProps (ctx) {
      /* *****
       * Cannot use ctx.req when exporting to static files
       * *****/
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
          <Head>
            <meta httpEquiv='x-ua-compatible' content='ie=edge' />
            <meta name='description' content='' />
            <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
            <title>Default title</title>

            <link rel='apple-touch-icon' sizes='57x57' href='/static/favicons/apple-icon-57x57.png' />
            <link rel='apple-touch-icon' sizes='60x60' href='/static/favicons/apple-icon-60x60.png' />
            <link rel='apple-touch-icon' sizes='72x72' href='/static/favicons/apple-icon-72x72.png' />
            <link rel='apple-touch-icon' sizes='76x76' href='/static/favicons/apple-icon-76x76.png' />
            <link rel='apple-touch-icon' sizes='114x114' href='/static/favicons/apple-icon-114x114.png' />
            <link rel='apple-touch-icon' sizes='120x120' href='/static/favicons/apple-icon-120x120.png' />
            <link rel='apple-touch-icon' sizes='144x144' href='/static/favicons/apple-icon-144x144.png' />
            <link rel='apple-touch-icon' sizes='152x152' href='/static/favicons/apple-icon-152x152.png' />
            <link rel='apple-touch-icon' sizes='180x180' href='/static/favicons/apple-icon-180x180.png' />
            <link rel='icon' type='image/png' sizes='192x192' href='/static/favicons/android-icon-192x192.png' />
            <link rel='icon' type='image/png' sizes='32x32' href='/static/favicons/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='96x96' href='/static/favicons/favicon-96x96.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/static/favicons/favicon-16x16.png' />
            <meta name='msapplication-TileColor' content='#ffffff' />
            <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
            <meta name='theme-color' content='#ffffff' />
          </Head>
          <Provider store={this.store}>
            <WrappedComponent {...this.props} />
          </Provider>
        </div>
      )
    }
  }
}
