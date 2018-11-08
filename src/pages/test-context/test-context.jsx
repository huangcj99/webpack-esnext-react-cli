import 'babel-polyfill'
import 'assets/css/reset.css'
import React from 'react'
import { render } from 'react-dom'
import Root from './root.jsx'

// 注入provider
import { combineProvider } from 'libs/combine-provider'
import { setService } from 'service'
import { setStore } from 'store'
import { servicesConfig, storeConfig } from './provider'

render(
  // 顶层注入services和store等provider
  combineProvider(
    Root, 
    setService(servicesConfig), 
    setStore(storeConfig)
  ),
  document.getElementById('app')
)
