import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <nav className="nav-header">
        <div className="nav-wrapper">
          <ul className="nav-mobile ul-flex title-center">
            <a className="logo" onClick={ () => this.props.onNavigate('signup')}> BE₸₸ER</a>
          </ul>
        </div>
    </nav>
  </header>
  )
  }
}
export default Navbar;

{/* <a onClick={() => this.props.onNavigate('clist')} className="brand-logo">BetApp</a> */}
{/* <div className="title">{this.props.active}</div> */}
