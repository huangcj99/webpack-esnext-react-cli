import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { injectMethods } from 'service'
import { injectStore } from 'store'

@injectMethods
@injectStore
export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    let { time, $dateFormat } = this.props

    return (
      <div>
        <h1>test-router</h1>
        <p>{ $dateFormat(time) }</p>
        <div>
          <Link to="/a">点击跳转到a</Link>
        </div>
        <div>
          <Link to="/b">点击跳转到b</Link>
        </div>
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}