import React, { Component } from 'react'

export const StoreContext = React.createContext()

/**
 * @param {component} RootComponent 传入class或者实例化的组件都可以
 * @param {object} store 
 */
export const setStore = (store) => {
  return (RootComponent) => {
    class Store extends Component {
      constructor(props) {
        super(props)
        // 将store转化成state，并添加setContext方法用于改变状态
        this.state = Object.assign(store, {
          setContext: (target) => {
            this.setState(target)
          }
        })
      }

      render () {
        return (
          <StoreContext.Provider value={this.state}>
            { typeof RootComponent === 'function' 
                ? <RootComponent></RootComponent>
                : RootComponent
            }
          </StoreContext.Provider>
        )
      }
    }

    return <Store></Store>
  }
  
}

/**
 * 用注解的方式给子组件props中注入store中的数据
 * @param {component} RealComponent 
 * 
 * 如： @inject
 *     class TestComponent extends Component {}
 */
export const injectStore = (RealComponent) => {
  return class extends Component {
    render () {
      return (
        <StoreContext.Consumer>
          { value => <RealComponent {...value} {...this.props}></RealComponent> }
        </StoreContext.Consumer>
      )
    }
  }
}