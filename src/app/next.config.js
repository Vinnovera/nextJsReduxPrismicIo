require('dotenv').config()
const webpack = require('webpack')
const withCSS = require('@zeit/next-css')

/** Customization so that enviroment variables can be used
 * both on server side and client side.
 * Merge this with Css modules config
 */
const css = (nextConfig) => {
  return {
    distDir: '../../build',
    exportPathMap: () => {
      return {
        '/': {page: '/'},
        '/gallery': {page: '/gallery'},
        '/prismic': {page: '/prismic'}
      }
    },
    webpack: (config, options) => {
      const cssConfig = withCSS({cssModules: true}).webpack(config, options)
      const dotenvConfig = (config) => {
        config.plugins.push(new webpack.EnvironmentPlugin(process.env))
        return config
      }
      return Object.assign({}, cssConfig, dotenvConfig)
    }
  }
}

module.exports = css
