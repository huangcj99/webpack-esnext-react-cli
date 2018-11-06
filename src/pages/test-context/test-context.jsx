import 'babel-polyfill'
import 'assets/css/reset.css'
import React from 'react'
import { render } from 'react-dom'
import App from './app.jsx'

// 组合provider的函数
import { combineProvider } from 'libs/combine-provider'
// service
import { setService } from 'service'
import dateFormat from 'service/format/date-format'
// store
import { setStore } from 'store'

// 顶层store
let store = {
  time: new Date().getTime(),
  person: {
    name: 'chen',
    age: 29
  }
}

// 顶层需要注入的方法
let providers = Object.assign(
  {},
  dateFormat
)

render(
  // 顶层注入service和store等provider
  combineProvider(
    App, 
    setService(providers), 
    setStore(store)
  ),
  document.getElementById('app')
)
