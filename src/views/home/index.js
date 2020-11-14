import React, { Component } from 'react'
// import {Switch,Route,NavLink,Redirect,withRouter} from  'react-router-dom'
import './index.less'
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detailList: ['detail_a', 'detail_b', 'detail_c'],
    }
  }
  render() {
    return (
      <div className="home">
        <h1>HOME PAGE</h1>
        {this.state.detailList.map((item, index) => {
          return (
            <h2
              key={index}
              onClick={() => {
                this.props.history.push(`/detail/${item}`)
              }}
            >
              {item}
            </h2>
          )
        })}
      </div>
    )
  }
}
