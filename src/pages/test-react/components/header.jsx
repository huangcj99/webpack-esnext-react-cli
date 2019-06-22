import React, { Component } from 'react'
import { injectStore } from '../../../store';

@injectStore
export default class Header extends Component {

  render() {
    console.log('header render')
    let { setContext } = this.props

    return (
      <div>
        <input 
          type="text" 
          value={this.props.title}
          onChange={(e) => {
            setContext({
              title: e.target.value
            })
          }} 
          />
      </div>
    )
  }
}