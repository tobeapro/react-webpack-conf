import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';
import Hello from 'src/components/hello';
export default class Home extends Component{
	constructor(props){
		super(props)
		this.state = {
			list:[
				{
					id:1,
					name:'detail-1'
				},
				{
					id:2,
					name:'detail-2'
				},
				{
					id:3,
					name:'detail-3'
				}
			]
		}
	}
	render() {
		 const props = { compiler: 'string1', framework: 'string2' }
		return (
			<div>
				<h1>This is home page</h1>
				<List
			      size="small"
			      bordered
			      dataSource={this.state.list}
			      renderItem={
			      	item => (
			      	  <List.Item>
			      	  	<Link to={`/detail/${item.name}`}>{item.name}</Link>
			      	  </List.Item>
			      	)
			      }
			    />
			</div>
		)
	}
}