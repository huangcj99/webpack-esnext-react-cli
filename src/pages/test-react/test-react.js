import 'babel-polyfill'
import 'assets/css/reset.css'
import React from 'react'
import { render } from 'react-dom'
import Root from './root.jsx'

// 注入provider
import { combineProvider } from 'libs/combine-provider'
import { setStore } from 'store'
import { storeConfig } from './provider'

render(
  combineProvider(
    Root,
    setStore(storeConfig)
  ),
  document.getElementById('app')
)
