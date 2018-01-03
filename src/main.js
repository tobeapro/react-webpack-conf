import React from 'react'
import ReactDom from 'react-dom'
import detail from './components/detail/detail'
import { Router, Route, hashHistory } from 'react-router'
class HelloReact extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: 123,
    };
  }  
  handle() {
    this.setState((state)=>({
      value: state.value+1
    }))
  }
  render () {
      return <h1 onClick={this.handle.bind(this)}>Hello {this.props.name}{detail}{this.state.value}</h1>
    }
  }
ReactDom.render(<HelloReact name="react"/>, document.getElementById('app'))
