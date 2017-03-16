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
  signUp() {
    let signupform = {
      firstName: this.state.firstname,
      lastName: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      passwordCheck: this.state.passwordcheck
    }
    console.log(signupform)
    const that = this
    axios.post("http://localhost:3001/signuphandler", signupform)
    .then(function(data) {
      console.log(data.err)
        // if error reload page
        // (data.error) ? that.setState({ display: 'signup' })
        // //otherwise redirect to signin
        // : that.setState({ display: 'clist' })
        })
  }
  render() {
    return (
      <div className="App">
        <div className="Page">
          <div className="Section">
           <h2> Sign Up </h2>
           <small className="hyper-text"> already have an account? Please login. </small>
            <img className="fb-login" src="https://ashleighmoneysaver.co.uk/images/loginwithfb.png" alt=""/>
            <form className="form">
              <div className="form-group">
                Firstname
                <input type="text" className="form-control" name="firstname" placeholder="First name" onChange={this.onInputChange} value={this.state.firstname}/>
              </div>
              <div className="form-group">
                Lastname
                <input type="text" className="form-control" name="lastname" placeholder="Last name" onChange={this.onInputChange} value={this.state.lastname}/>
              </div>
              <div className="form-group">
                Email
                <input type="text" className="form-control" name="email" placeholder="Email" onChange={this.onInputChange} value={this.state.email}/>
              </div>
              <div className="form-group">
                Password
                <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password}
          onChange={this.onInputChange} />
              </div>
              <div className="form-group">
                Password again
                <input type="password" className="form-control" name="passwordcheck" placeholder="Password" value={this.state.passwordcheck}
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
