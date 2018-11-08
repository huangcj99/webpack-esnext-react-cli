import React from 'react'
import {
  HashRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import asyncComponent from 'libs/async-component'

import Root from './root'
import A from './components/a'
const B = asyncComponent(() => import('./components/b'))

const RouterConfig = (
  <HashRouter>
    <Root>
      <Switch>
        <Route path="/a" component={A} />
        <Route path="/b" component={B} />
        <Redirect to='/a' />
      </Switch>
    </Root>
  </HashRouter>
);

export default RouterConfig;