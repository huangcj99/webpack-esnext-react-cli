import React, { Component } from 'react'
import { injectMethods } from 'provider'

// 给TestProvider的props注入顶层的方法
@injectMethods
export default class TestProvider extends Component {
  componentDidMount () {
    // 任意组件都可通过injectMethods注入全局方法
    console.log('test-provider已向props注入全局方法')
    let a = 1
  }

  render () {
    let { $dateFormat } = this.props;

    return (
      <div>
        <p>test-provider</p>
        <p>{ $dateFormat(new Date()) }</p>
      </div>
    )
  }
}