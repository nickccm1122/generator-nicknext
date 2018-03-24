// @flow

import '../scss/styles.scss'

import getConfig from 'next/config'
import Link from 'next/link'
import React from 'react'

import ExampleComp from '../components/ExampleComp'
import CoolEmoji from '../static/images/svgs/cool.svg'

const { publicRuntimeConfig } = getConfig()

class Index extends React.PureComponent<void> {
  handleClick = () => console.log('Clicked!')

  render () {
    return (
      <div>
        <CoolEmoji style={{ height: 60 }} />
        <h1 className='testing'>This is an index page</h1>
        <p>publicRuntimeConfig: {publicRuntimeConfig.envText}</p>
        <ul>
          <li>
            <Link href='/b' as='/b'>
              <a>b</a>
            </Link>
          </li>
          <li>
            <Link href='/a' as='/a'>
              <a>a</a>
            </Link>
          </li>
        </ul>
        <ExampleComp onClick={this.handleClick} />
      </div>
    )
  }
}
export default Index
