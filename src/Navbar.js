import React, { Component } from 'react'

class Navbar extends Component {
  changePage(e) {
    console.log('change to page: ' + e)
  }
  toggleNavbar() {
    console.log('toggle navbar')
  }
  render() {
    return (
      <header className="navbar navbar-fixed-top navbar-default">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" onClick={this.toggleNavbar.bind(this)}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="navbar-brand" onClick={() => this.props.onNavigate('signup')}>Betapp</div>
          </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="active" onClick={ ()=> this.changePage(1)}><a href="#">Signup</a></li>
          <li><a href="#">Login</a></li>
          <li role="separator" className="divider"></li>
          <li><a href="#">Posts</a></li>
          <li role="separator" className="divider"></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </div>
  </header>
  )
  }
}
export default Navbar;
