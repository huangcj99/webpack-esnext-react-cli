import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { injectMethods } from 'service'
import { injectStore } from 'store'
import styles from './root.scss'

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
        <h1 
          className={`${styles['title-h1']} ${'flex-center'}`}
        >test-router</h1>
        <p className={styles['time']}>{ $dateFormat(time) }</p>
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