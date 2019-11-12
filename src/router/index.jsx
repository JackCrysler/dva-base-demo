import React from 'react'
import {Router, Route, Switch, Redirect} from 'dva/router'
import dynimic from 'dva/dynamic'

export default (dva)=>{
    const {history,app} = dva

    const routes=[
        {
            path:'/',
            component: ()=>import('../App'),
        },
        {
            path:'/login',
            component: ()=>import(/* webpackChunkName:'login' */'../views/Login'),
            models:()=>[import(/* webpackChunkName:'model.user' */'../models/users')],
        },
        {
            path:'/dashboard',
            component: ()=>import(/* webpackChunkName:'dashboard' */'../views/DashBoard')
        }
    ]

    return (
        <Router history={history}>
            <Switch>
                <Redirect exact from="/" to="/dashboard"></Redirect>
                
                {routes.map(route=>{
                    return <Route key={route.path} exact path={route.path} component={dynimic({
                        app,
                        ...route
                    })}></Route>
                })}
            </Switch>
        </Router>
    )
}