import React, { Component } from 'react';
import Router from './Router'
import Footer from './Footer'
import Navbar from './Navbar'

class App extends Component {
  constructor() {
    super()
    this.state = { display : 'login' }
    this.goToPage = this.goToPage.bind(this)
  }
  goToPage(page) {
    this.setState({ display: page })
  }
  render() {
    return(
        <div>
          <Navbar onNavigate={ this.goToPage } active={ this.state.display } />
          <Router onNavigate={ this.goToPage } renderPage={ this.state.display } />
          <Footer onNavigate={ this.goToPage } />
        </div>
    )
    }
}

export default App


// call back from child to parent, send with props
