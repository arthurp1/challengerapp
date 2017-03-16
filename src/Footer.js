import React, { Component } from 'react'

class Footer extends Component {
  changePage() {
    console.log(this.props)
    this.props.onNavigate('profile')
  }
  render() {
    return (
      <footer className="navbar navbar-fixed-bottom navbar-default">
        <ul className="nav navbar-nav footerbar">
          <li><div onClick={ () => this.props.onNavigate('clist')} className="active"><i className="fa fa-th-large"></i></div></li>
          <li><div onClick={ () => this.props.onNavigate('cnew')}> <i className="fa fa-plus-square"></i></div></li>
          <li><div onClick={ () => this.props.onNavigate('updates')}> <i className="fa fa-envelope"></i><span className="badge">5</span></div></li>
          <li><div onClick={ () => this.props.onNavigate('profile')}><i className="fa fa-user-circle"></i></div></li>
        </ul>
  </footer>
  )
  }
}


export default Footer;
