import React from 'react'
import ReactDom from 'react-dom'
import Home from './components/home/home'
import Detail from './components/detail/detail'
import About from './components/about/about'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
const UrlRouters = () => (
  <Router>
      <div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/about">关于</Link></li>
          <li><Link to="/detail">详细</Link></li>
        </ul>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/detail" component={Detail}/>
      </div>
    </Router>
  )
  class HelloReact extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        date: new Date()
      };
    }
    componentDidMount() {
      this.Timing = setInterval(() => {
        this.setState({
          date: new Date()
        })
      },1000)
    }
    componentWillMount() {
      clearInterval(this.Timing)
    }
  render() {
      return (
        <div>
          <h1>Hello {this.props.name}</h1>
          <h2>This time {this.state.date.toLocaleTimeString()}</h2>
          <UrlRouters />
        </div>
      )
    }
  }
ReactDom.render(<HelloReact name="React"/>, document.getElementById('app'))
