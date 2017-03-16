import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <header className="navbar-fixed">
        <nav>
        <div className="nav-wrapper">
          <ul className="nav-mobile ul-flex">
            <a onClick={ () => this.props.onNavigate('signup')}> BetApp</a>
            <a> <i className="title-center">{this.props.active}</i></a>
          </ul>
        </div>
    </nav>
  </header>
  )
  }
}
export default Navbar;

{/* <a onClick={() => this.props.onNavigate('clist')} className="brand-logo">BetApp</a> */}
