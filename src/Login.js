import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: '' }
    this.state = { display: 'login' }
    this.logIn = this.logIn.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState( { [event.target.name]: event.target.value })
  }

  logIn(event) {
    event.preventDefault()
    console.log('next page')
    console.log(this.props)
    this.props.nextPage('clist')
    if (this.state.username === 'Arthur' && this.state.password === 'admin') {
      console.log('login success')
      this.props.nextPage('clist')
    } else {
      console.log('login false')
    }
  }

  render() {
    return (
      <div className="Page">
        <div className="Section">
          <h2> Sign In </h2>
          <form className="form">
            <div className="form-group">
              Username
              <input type="text" className="form-control" name="username"  placeholder="username" onChange={this.onInputChange} value={this.state.username}/>
            </div>
            <div className="form-group">
              Password
              <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password}
        onChange={this.onInputChange} />
            </div>
            <button onClick={this.logIn} className="btn btn-default">Login</button>
          </form>
          </div>
      </div>
    );
  }
}

export default Login;
