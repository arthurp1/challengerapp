import React, { Component } from 'react'

class Footer extends Component {
  changePage(e) {
    console.log('change to page: ' + e)
  }
  render() {
    return (
      <footer className="navbar navbar-fixed-bottom navbar-default">
        <ul className="nav navbar-nav footerbar">
          <li><div href="#" onClick={ this.props.nextPage('clist') } className="active"><i className="fa fa-th-large"></i></div></li>
          <li><a href="#"><i className="fa fa-plus-square"></i></a></li>
          <li><a href="#"><i className="fa fa-envelope"></i><span className="badge">5</span></a></li>
          <li><a href="#"><i className="fa fa-user-circle"></i></a></li>
        </ul>
  </footer>
  )
  }
}


export default Footer;
