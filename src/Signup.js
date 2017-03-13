import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <div className="App">
        <div className="Page">
          <div className="Section">
           <h2> Sign Up </h2>
            <form>
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
      </div>
    );
  }
}

export default Signup
