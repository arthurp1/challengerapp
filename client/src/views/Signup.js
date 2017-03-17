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
      password: this.state.password
    }
    console.log(signupform)
    // const that = this
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
           <h3> Sign Up </h3>
           <small className="hyper-text"> already have an account? Please login. </small>
            <img className="fb-login" src="https://ashleighmoneysaver.co.uk/images/loginwithfb.png" alt=""/>
            <form className="form">
              <div className="input-field">
                First name
                <input type="text" className="validate" name="firstname" placeholder="First name" onChange={this.onInputChange} value={this.state.firstname}/>
              </div>
              <div className="input-field">
                First name
                <input type="text" className="validate" name="firstname" placeholder="First name" onChange={this.onInputChange} value={this.state.firstname}/>
              </div>
              <div className="input-field">
                Email
                <input type="text" className="validate" name="email" placeholder="Email" onChange={this.onInputChange} value={this.state.email}/>
              </div>
              <div className="input-field">
                Password
                <input type="password" className="validate" name="password" placeholder="Password" value={this.state.password}
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
