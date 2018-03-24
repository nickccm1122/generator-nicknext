'use strict'

module.exports = {
  '*.js': [
    'import-sort --write',
    'prettier-standard',
    'standard --fix',
    'git add'
  ],
  '*.json': ['prettier-standard', 'git add'],
  '*ignore-sync': ['ignore-sync', 'git add'],
  '*.scss': ['prettier-standard', 'stylelint --fix', 'git add']
}
