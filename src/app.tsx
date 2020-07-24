import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import { Provider } from 'react-redux'
import store from '@/store'
import '@/asset/css/common.scss'
import { Layout, Menu } from 'antd'
const { Content, Sider } = Layout
import routes from '@/router'

interface Iprops {
    [propName:string]: string
}
export default class App extends Component<Iprops>{
    constructor(props:Iprops){
        const pathname = window.location.pathname.split('/')[1]
        super(props)
        this.state = {
            defaultMenu:'/'+pathname
        }
    }
    render():React.ReactElement{
        return (
            <Provider store={store}>
                <Router>
                    <Layout style={{height: '100vh',minHeight:'360px'}}>
                        <Sider width={200} className="site-layout-background" style={{ height: '100%', borderRight: 0 }}>
                            <Menu theme="dark" defaultSelectedKeys={[this.state.defaultMenu]}>
                                {
                                    routes.map(item=> (
                                    <Menu.Item key={item.path}><Link to={item.itemPath} key={item.path}><item.icon />{item.name}</Link></Menu.Item>
                                    ))
                                }
                            </Menu>
                        </Sider>
                        <Layout>
                            <Content >
                                <Switch>
                                    {
                                        routes.map(item=>(
                                            <Route key={item.path} path={item.path} exact={!!item.isExact} component={item.component}>
                                            </Route>
                                        ))
                                    }
                                </Switch>
                            </Content>
                        </Layout>
                    </Layout>
                </Router>
            </Provider>
        )
    }
}