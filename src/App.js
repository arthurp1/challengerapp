import React, { Component } from 'react';
import Router from './Router'
import Footer from './Footer'
import Navbar from './Navbar'

class App extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <Router className="col-md-4 col-md-offset-4" />
        <Footer />
      </div>
    )
    }
}


export default App


// call back from child to parent, send with props
