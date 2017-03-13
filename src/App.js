import React, { Component } from 'react';
import Navbar from './Navbar'
import Router from './Router'

class App extends Component {
  constructor() {
    super()
    this.state = {display : 3}
  }
  render() {
    return(
    <div>
      <Navbar/>
      <Router />
    </div>
  )
    }
}


export default App


// call back from child to parent, send with props
