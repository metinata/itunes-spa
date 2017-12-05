import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import store from './store'
import * as Layouts from './layout'
import { routes } from './routes'

ReactDOM.render(
    <Provider store={store()}>
        <BrowserRouter>
            <Switch>
                <Route path='/product/:id' component={Layouts.Default(routes.productView)} />
                <Route path='/:type?/' component={Layouts.Default(routes.homeView)} />
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);