'use strict'

module.exports = options => ({
  port: 6006,
  // Entry is relative to process.cwd()
  entry: ['.storybook/config.js', '.storybook/addons.js'],

  presets: [require('poi-preset-react')(), require('poi-preset-storybook')()]
})
