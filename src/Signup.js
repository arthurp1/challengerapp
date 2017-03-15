import React, { Component } from 'react';

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
    this.props.onChangePage(3)
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
                Username
                <input type="text" className="form-control" name="username" placeholder="username" onChange={this.onInputChange} value={this.state.username}/>
              </div>
              <div className="form-group">
                Password
                <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password}
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
