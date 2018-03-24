'use strict'

const chalk = require('chalk')
const Generator = require('yeoman-generator')
const yosay = require('yosay')

module.exports = class extends Generator {
  initializing () {
    this.log(
      yosay(
        `Give me your ${chalk.green('project name')} and ${chalk.green(
          'description'
        )} and I will give you the code.`
      )
    )
  }

  prompting () {
    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Name of Project',
        default: 'nextjs-boilerplate'
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Description',
        default: 'A nextjs boilerplate'
      }
    ]

    return this.prompt(prompts).then(props => {
      this.props = props
    })
  }

  writing () {
    this.fs.copyTpl(
      `${this.templatePath()}//**/!(_)`,
      this.destinationPath(),
      this.props,
      { globOptions: { dot: true } }
    )
    this.fs.copyTpl(
      `${this.templatePath()}//**/.*`,
      this.destinationPath(),
      this.props,
      { globOptions: { dot: true } }
    )
    // Copy .storybook
    this.fs.copyTpl(
      `${this.templatePath()}/.storybook`,
      `${this.destinationPath()}/.storybook`
    )
  }
}
