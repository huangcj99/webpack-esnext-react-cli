import 'babel-polyfill'
import 'assets/css/reset.css'
import './test.scss'
import React from 'react'
import { render } from 'react-dom'
import App from './app.jsx'
// provider
import { setProvider } from 'provider'
import detectAgent from 'provider/detect-agent'
import dateFormat from 'provider/format/date-format'
import storage from 'provider/storage'
import urlutils from 'provider/url-utils'

// 顶层需要注入的方法
let providers = Object.assign(
  {},
  detectAgent,
  dateFormat,
  storage,
  urlutils
)

render(
  // Context.Provider注入方法，供子组件使用
  setProvider(App, providers),
  document.getElementById('app')
)
