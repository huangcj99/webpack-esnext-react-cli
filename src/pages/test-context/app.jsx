import React, { Component } from 'react'
import { injectMethods } from 'provider'
import TestState from './components/test-state'

@injectMethods
export default class App extends Component {

  render () {
    let { states } = this.props

    return (
      <div>
        <h1>test-context</h1>
        <p>{ states.a }</p>
        <TestState />
      </div>
    )
  }
}
