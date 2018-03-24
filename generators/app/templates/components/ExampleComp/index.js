// @flow

import './style.scss'

import React from 'react'

type Props = {
  onClick: () => void
}

const TestComponent = (props: Props) => (
  <div>
    <p className='ExampleComp_text' onClick={props.onClick}>
      Amet tempor eiusmod exercitation eiusmod in veniam qui.
    </p>
  </div>
)

export default TestComponent
