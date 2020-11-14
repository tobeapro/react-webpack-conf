import React from 'react'
import { Spin } from 'antd'
const asyncComponent = (component) =>
  class async_component extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        Component: null,
      }
    }
    componentDidMount() {
      component.then((module) => {
        this.setState({
          Component: module.default,
        })
      })
    }
    render() {
      const { Component } = this.state
      return Component ? <Component {...this.props} /> : <Spin />
    }
  }
export default asyncComponent
