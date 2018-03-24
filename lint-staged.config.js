'use strict'

module.exports = {
  linters: {
    '*.js': [
      'import-sort --write',
      'prettier-standard',
      'standard --fix',
      'git add'
    ],
    '*.json': ['prettier-standard', 'git add'],
    '*ignore-sync': ['ignore-sync', 'git add']
  },
  ignore: ['**/generators/app/templates/**/*']
}
