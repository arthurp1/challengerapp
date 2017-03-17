import React, { Component } from 'react';
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: '', error: '' }
    this.loginHandler = this.loginHandler.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState( { [event.target.name]: event.target.value })
  }
  loginHandler(event) {
      event.preventDefault()
      const that = this
      let loginform = {
        email: this.state.email,
        password: this.state.password,
      }
      axios.post("/loginhandler", loginform)
      .then(function(result) {
          console.log(result)
          result.data.success ? that.props.nextPage('clist') : that.setState({ error: result.data.error })
          })
  }
  render() {
    return (
      <div className="Page">
        <div className="Section">
          <h2> Sign In </h2>
          <small>{this.state.error}</small>
          <form className="form">
            <div className="form-group">
              Email
              <input type="email" className="form-control" name="email"  placeholder="email" onChange={this.onInputChange} value={this.state.email}/>
            </div>
            <div className="form-group">
              Password
              <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password}
        onChange={this.onInputChange} />
            </div>
            <button onClick={this.loginHandler} className="btn btn-default btn-custom">Login</button>
          </form>
          </div>
      </div>
    );
  }
}

export default Login;
