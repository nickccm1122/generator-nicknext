import '../scss/styles.scss'

import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator, configure } from '@storybook/react'

const requireAll = requireContext => requireContext.keys().map(requireContext)

const loadStories = () => {
  addDecorator(withKnobs)
  requireAll(require.context('../stories', true, /\.story\.js$/))
}

configure(loadStories, module)
