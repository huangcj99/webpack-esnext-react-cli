import 'babel-polyfill'
import 'assets/css/reset.css'
import React from 'react'
import { render } from 'react-dom'
import App from './app.jsx'

// provider
import { setProvider } from 'provider'
// store
import { setStore } from 'store'

let store = {
  a: '999'
}

// 顶层需要注入的方法
let providers = Object.assign(
  {},
  {
    test: '000'
  }
)

render(
  // Context.Provider注入方法，供子组件使用
  setStore(setProvider(App, providers), store),
  document.getElementById('app')
)
