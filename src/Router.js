import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import Signup from './Signup'
import ChallengeList from './ChallengeList'
import Cnew from './Cnew'
import Profile from './Profile'


class Router extends Component {
  render() {
    switch (this.props.renderPage) {
      default:
        return <Login />
      case 'login':
        return <Login nextPage={this.props.onNavigate} />
      case 'signup':
        return <Signup nextPage={this.props.onNavigate} />
      case 'clist':
        return <ChallengeList nextPage={this.props.onNavigate} />
      case 'cnew':
        return <Cnew nextPage={this.props.onNavigate} />
      case 'profile':
        return <Profile nextPage={this.props.onNavigate} />
      }
  }
}

export default Router


// call back from child to parent, send with props
