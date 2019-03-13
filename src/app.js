import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { Menu, Icon, Button } from 'antd';
import Home from '@/views/home/';
import Detail from '@/views/detail/';
import User from '@/views/user/';
import NotFound from '@/views/404/';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class App extends Component{
	render() {
		return (
				<Router>
					<section className='main-container'>
						<Menu
						  className='left-nav'
						  defaultSelectedKeys={['1']}
				          defaultOpenKeys={['sub1']}
				          mode="inline"
				          theme="dark">
							<Menu.Item key="1">
					            <Link to='/'><Icon type="pie-chart" />home</Link>
				            </Menu.Item>
					        <Menu.Item key="2">
					            <Link to='/user'><Icon type="user" />user</Link>
					        </Menu.Item>
						</Menu>
						<main className='main-body'>
							<Switch>
								 <Route exact path='/' component={Home} />
								 <Route path='/detail/:name' component={Detail} />
								 <Route path='/user' component={User} />
								 <Route component={NotFound} />						 
							</Switch>
						</main>
					</section>
				</Router>
		)
	}
}