import React, { Component } from 'react'

class Footer extends Component {
  changePage() {
    console.log(this.props)
    this.props.onNavigate('profile')
  }
  render() {
    return (
      <nav className="nav-footer">
        <div className="nav-wrapper">
          <ul className="nav-mobile ul-flex">
              <li><a onClick={ () => this.props.onNavigate('clist')} className="active"><i className="small material-icons">home</i></a></li>
            <li><a onClick={ () => this.props.onNavigate('clist')} className="active"><i className="small material-icons">trending_up</i></a></li>
            <a onClick={ () => this.props.onNavigate('cnew')} className="btn-floating btn-large waves-effect waves-light teal">
                <i className="material-icons btn-add">monetization_on</i>  </a>
            <li><a onClick={ () => this.props.onNavigate('updates')}> <i className="small material-icons">email</i></a></li>
            <li><a onClick={ () => this.props.onNavigate('profile')}> <i className="small material-icons">account_circle</i></a></li>
          </ul>
        </div>
    </nav>
  )
  }
}


export default Footer;

{/* <footer className="navbar navbar-fixed-bottom navbar-default">
  <ul className="nav navbar-nav footerbar">
    <li><div onClick={ () => this.props.onNavigate('clist')} className="active"><i className="fa fa-th-large"></i></div></li>
    <li><div onClick={ () => this.props.onNavigate('cnew')}> <i className="fa fa-plus-square"></i></div></li>
    <li><div onClick={ () => this.props.onNavigate('updates')}> <i className="fa fa-envelope"></i><span className="badge">5</span></div></li>
    <li><div onClick={ () => this.props.onNavigate('profile')}><i className="fa fa-user-circle"></i></div></li>
  </ul>
</footer> */}

{/* <li><a onClick={ () => this.props.onNavigate('cnew')}> <i className="small material-icons">add</i></a></li> */}
