import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import Signup from './Signup'
import ChallengeList from './Clist'
import Navbar from './Navbar'

class Router extends Component {
  constructor() {
    super()
    this.state = {display : 3}
  }
  render() {
    switch (this.state.display) {
      default:
        return <Login />
      case 1:
        return <Login onChangePage={ (page) => this.setState({display: page})} />
      case 2:
        return <Signup onChangePage={ (page) => this.setState({display: page})}/>
      case 3:
        return <ChallengeList onChangePage={ (page) => this.setState({display: page})}/>
      }
  }
}

export default Router


// call back from child to parent, send with props
