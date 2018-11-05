import React, { Component } from 'react'

export const Context = React.createContext()

/**
 * @param {component} RootComponent 
 * @param {object} globalMethods 
 */
export const setProvider = (RootComponent, providers) => {
  return (
    <Context.Provider value={providers}>
      <RootComponent></RootComponent>
    </Context.Provider>
  )
}

/**
 * 用注解的方式给子组件this中注入方法
 * @param {component} RealComponent 
 * 
 * 如： @injectMethods
 *     class TestComponent extends Component {}
 * 
 * 通过上面的方式就可将存储在顶层的方法注入进组件的props属性中
 */
export const injectMethods = (RealComponent) => {
  return class extends Component {
    render () {
      return (
        <Context.Consumer>
          { value => <RealComponent {...value} {...this.props}></RealComponent> }
        </Context.Consumer>
      )
    }
  }
}
