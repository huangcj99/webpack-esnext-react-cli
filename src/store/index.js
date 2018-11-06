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
        this.state = Object.assign({}, store, (() => {
          // 往state中注入setContext方法，用于改变context中的数据
          return {
            setContext: (target) => {
              this.setState(target)
            }
          }
        })())
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
 * 用注解的方式给子组件this中注入方法
 * @param {component} RealComponent 
 * 
 * 如： @injectMethods
 *     class TestComponent extends Component {}
 * 
 * 通过上面的方式就可将存储在顶层的方法注入进组件的props属性中
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