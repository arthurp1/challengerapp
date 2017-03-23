import React, { Component } from 'react';
import Login from './views/Login'
import Signup from './views/Signup'
import ChallengeList from './views/ChallengeList'
import ChallengeForm from './views/ChallengeForm'
import Profile from './views/Profile'
import Updates from './views/Updates'
import './App.css';


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
        return <ChallengeForm nextPage={this.props.onNavigate} />
      case 'profile':
        return <Profile nextPage={this.props.onNavigate} />
      case 'updates':
        return <Updates nextPage={this.props.onNavigate} />
      }
  }
}

export default Router


// call back from child to parent, send with props
