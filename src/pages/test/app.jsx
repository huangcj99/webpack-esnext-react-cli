import React, { Component } from 'react'
import classNames from 'classnames/bind'
import styles from './app.scss'
//子组件
import Child from './components/child'

const cx = classNames.bind(styles)

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    let className = cx({
      'c-red': true,
      'fz-18': true
    })

    return (
      <div className={styles.div}>
        <h1 className={`${className} ${styles['cursor']}` }>title</h1>
        <Child></Child>
      </div>
    )
  }
}
