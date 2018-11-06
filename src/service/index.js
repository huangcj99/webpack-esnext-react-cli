import React, { Component } from 'react'

export const ServiceContext = React.createContext()

/**
 * @param {component} RootComponent 传入class或者实例化的组件都可以
 * @param {object} globalMethods 
 */
export const setService = (providers) => {
  return (RootComponent) => {
    return (
      <ServiceContext.Provider value={providers}>
        { typeof RootComponent === 'function' 
            ? <RootComponent></RootComponent>
            : RootComponent
        }
      </ServiceContext.Provider>
    )
  }
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
        <ServiceContext.Consumer>
          { value => <RealComponent {...value} {...this.props}></RealComponent> }
        </ServiceContext.Consumer>
      )
    }
  }
}
