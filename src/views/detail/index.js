import React, { Component, Fragment } from 'react';
import bg from '@/assets/bg.png';
export default class Detail extends Component{
	constructor(props){
		super(props)
	}
	render() {
		return (
			<Fragment>
				<h1>This is {this.props.match&&this.props.match.params.name} page</h1>
				<img src={bg} />
			</Fragment>
		)
	}
}