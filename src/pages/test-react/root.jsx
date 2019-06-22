import React, { PureComponent } from 'react'
import Header from './components/header'
import { injectStore } from '../../store';

@injectStore
export default class App extends PureComponent {

  componentDidMount() {
    // let { setContext } = this.props

    // setTimeout(() => {
    //   setContext({
    //     title: 'update'
    //   })
    // }, 2000)
  }

  render() {
    console.log('root render')

    return (
      <div>
        <Header />
      </div>
    )
  }
}