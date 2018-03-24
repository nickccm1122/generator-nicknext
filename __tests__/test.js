'use strict'

const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')

/**
 * Test suite for the whole project
 */
describe('-- generator-nicknext --', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      projectName: 'my-new-project',
      projectDescription: 'my-name'
    })
  })

  test('should creates files', () => {
    // Simply check if some files have created
    assert.file(['next.config.js', 'package.json', 'README.md'])
  })
})
