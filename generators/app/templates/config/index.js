'use strict'

const config = {
  development: {},
  staging: {},
  production: {}
}

module.exports = config[process.env.CONFIG_ENV || 'development']
