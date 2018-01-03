import React from 'react'
import ReactDom from 'react-dom'
import detail from './components/detail/detail'
import { Router, Route, hashHistory } from 'react-router'
// const HelloReact = React.createClass({
//     render: function() {
//       return <h1>Hello {this.props.name}</h1>
//     }
//   })
// ReactDom.render(<HelloReact name="react" />, document.getElementById('app'))
function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDom.render(
      <div>
          {element}
          {detail}
      </div>,
      document.getElementById('app')
    );
  }
  
  setInterval(tick, 1000)
