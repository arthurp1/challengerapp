import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import Signup from './Signup'
import ChallengeList from './Clist'
import Updates from './Updates'
import ChallengeCreate from './Cnew'
import Profile from './Profile'


class Router extends Component {
  constructor() {
    super()
    this.state = {display : 'profile' }
  }
  render() {
    switch (this.state.display) {
      default:
        return <Login />
      case 'login':
        return <Login nextPage={ (page) => this.setState({display: page})} />
      case 'signup':
        return <Signup nextPage={ (page) => this.setState({display: page})}/>
      case 'clist':
        return <ChallengeList nextPage={ (page) => this.setState({display: page})}/>
      case 'cnew':
        return <ChallengeCreate nextPage={ (page) => this.setState({display: page})}/>
      case 'profile':
        return <Profile nextPage={ (page) => this.setState({display: page})}/>
      }
  }
}

export default Router


// call back from child to parent, send with props
