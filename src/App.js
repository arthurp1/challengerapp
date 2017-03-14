import React, { Component } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import Router from './Router'

class App extends Component {
  constructor() {
    super()
    this.state = {display : 2}
  }
  render() {
    return(
    <div>
      <Navbar  />
      <Router className="col-md-4 col-md-offset-4"/>
      <Footer />
    </div>
  )
    }
}


export default App


// call back from child to parent, send with props
