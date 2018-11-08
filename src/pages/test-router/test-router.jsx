import 'babel-polyfill'
import 'assets/css/reset.css'
import 'assets/css/global.css'
import React from 'react'
import { render } from 'react-dom'
import Router from './router.jsx'

// 注入provider
import { combineProvider } from 'libs/combine-provider'
import { setService } from 'service'
import { setStore } from 'store'
import { servicesConfig, storeConfig } from './provider'

render(
  // 顶层注入service和store等provider
  combineProvider(
    Router, 
    setService(servicesConfig), 
    setStore(storeConfig)
  ),
  document.getElementById('app')
)
