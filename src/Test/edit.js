import React, { Component } from 'react';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
// import { signOut } from './firebaseAPI/Authentication'
import { firebaseAuth } from './config/firebaseConfig'
import webPage from './componentPage/webPage'
import feedPage from './componentPage/feedPage'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/webPage', state: { from: props.location } }} />}
    />
  )
}

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/feedPage' />}
    />
  )
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount() {
    this.removeListener()
  }


  render() {
    return this.state.loading === true ? <h1 >Loading</h1> : (
      <BrowserRouter>
            <Switch>
              <Route path='/' exact component={webPage} />
              <PublicRoute authed={this.state.authed} path='/webPage' component={webPage} />
              <PrivateRoute authed={this.state.authed} path='/feedPage' component={feedPage} />
              <Route render={() => <h3>No Match</h3>} />
            </Switch>
      </BrowserRouter>
    );
  }
}


