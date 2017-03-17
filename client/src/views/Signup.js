import React, { Component } from 'react';
import axios from 'axios'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: ''}
    this.signUp = this.signUp.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState( { [event.target.name]: event.target.value })
  }
  signUp(event) {
    event.preventDefault()
    let signupform = {
      firstName: this.state.firstname,
      lastName: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      passwordCheck: this.state.passwordcheck
    }
    console.log('signupform')
    const that = this
    console.log(that)
    axios.post("/signuphandler", signupform)
    .then(function(result) {
        result.data.success ? that.props.nextPage('login') : that.setState({ error: result.data.error })
        })
    .catch(function(err) {
      console.log(err)
    })
  }
  render() {
    return (
      <div className="App">
        <div className="Page">
          <div className="Section">
           <h2> Sign Up </h2>
           <small>{this.state.error}</small>
           <small className="hyper-text"> already have an account? Please login. </small>
            <form className="form">
              <div className="input-field">
                First name
                <input type="text" className="validate col s6" name="firstname" placeholder="First name" onChange={this.onInputChange} value={this.state.firstname}/>
              </div>
              <div className="input-field1">
                Last name
                <input type="text" className="validate" name="lastname" placeholder="Last name" onChange={this.onInputChange} value={this.state.lastname}/>
              </div>
              <div className="input-field1">
                Email
                <input type="text" className="validate" name="email" placeholder="Email" onChange={this.onInputChange} value={this.state.email}/>
              </div>
              <div className="input-field1">
                Password
                <input type="password" className="validate" name="password" placeholder="Password" value={this.state.password}
          onChange={this.onInputChange} />
              </div>
              <div className="input-field1">
                Password
                <input type="password" className="validate" name="passwordcheck" placeholder="Password again" value={this.state.passwordcheck}
          onChange={this.onInputChange} />
              </div>
              <button onClick={this.signUp} className="btn btn-default">Signup</button>
            </form>
            </div>
        </div>
      </div>
    )
  }
}

export default Signup
