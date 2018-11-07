import React, { Component } from 'react'
import { injectMethods } from 'service'
import { injectStore } from 'store'
import TestState from './components/test-state'

@injectMethods
@injectStore
export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    let { setContext } = this.props

    setTimeout(() => {
      // 更改context中的值
      setContext({
        person: {
          name: 'huang',
          age: 19
        }
      })
    }, 2000)
  }

  render () {
    let { a } = this.props

    console.log(this.props)

    return (
      <div>
        <h1>test-context</h1>
        <p>{ a }</p>
        <TestState />
      </div>
    )
  }
}