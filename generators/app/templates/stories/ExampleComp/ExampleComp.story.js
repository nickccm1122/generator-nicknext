import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import ExampleComp from '../../components/ExampleComp'

storiesOf('ExampleComp', module).add('default', () => (
  <ExampleComp onClickLink={type => action(`${type} link clicked`)} />
))
