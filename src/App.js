import React, { Component } from 'react';
import Router from './Router'
import Footer from './Footer'
import Navbar from './Navbar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {display : 'login' }
  }
  render() {
    return(
      <div>
        <Navbar nextPage={ (page) => this.setState({display: page})} />
        <Router display={this.state.display}/>
        <Footer nextPage={ (page) => this.setState({display: page})} />
      </div>
    )
    }
}


export default App;


// call back from child to parent, send with props
