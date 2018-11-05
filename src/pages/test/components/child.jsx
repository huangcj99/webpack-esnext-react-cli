import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import TestProvider from './test-provider'

export default class Child extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <TestProvider a="99999999"></TestProvider>
      </div>
    )
  }
}
