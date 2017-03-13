import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'
import Signup from './Signup'


class App extends Component {
  constructor() {
    super()
    this.state = {display : 1}
  }
  change
  render() {
    switch (this.state.display) {
      case 1:
        return <Login onChangePage={ (page) => this.setState({display: page})} />
      case 2:
        return <Signup onChangePage={ (page) => this.setState({display: page})}/>
      }
  }
}

export default App


// call back from child to parent, send with props
