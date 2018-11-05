import 'babel-polyfill'
import 'assets/css/reset.css'
import React from 'react'
import { render } from 'react-dom'
import App from './app.jsx'

// provider
import { setProvider } from 'provider'

let states = {
  states: {
    a: 'a999',
    b: 'b999'
  }
}

// 顶层需要注入的方法
let providers = Object.assign(
  {},
  states
)

render(
  // Context.Provider注入方法，供子组件使用
  setProvider(App, providers),
  document.getElementById('app')
)
