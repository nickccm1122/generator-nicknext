'use strict'

const config = require('./config')

const withSass = require('@zeit/next-sass')

module.exports = withSass({
  serverRuntimeConfig: {}, // refer to file in /config if need
  publicRuntimeConfig: config, // expose config in client
  webpack: (config, options) => {
    // for both dev or production build, put font files into .next/static
    config.module.rules.push({
      test: /\.woff2?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
            name: '[name].[ext]',
            outputPath: 'static',
            publicPath: '.'
          }
        }
      ]
    })
    config.module.rules.push({
      test: /\.(ttf|eot|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static',
            publicPath: '.'
          }
        }
      ]
    })
    return config
  }
})
