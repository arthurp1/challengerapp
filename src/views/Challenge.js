import React, { Component } from 'react'

class Challenge extends Component {
  backProject(e) {
    console.log('project backed with amount:' + e)
  }
  render() {
    console.log('Props of Challenge')
    let post = this.props
    return <div key={post.id} className="card">
              <div className="card-image">
              <img src='https://placeimg.com/400/225/people' alt={post.title} onClick={this.backProject(1)}/>
              </div>
                <div className="card-content">
                    <div className="card-title">{post.username}</div>
                      <p>{post.title}</p>
                      <p>{post.backNumber}<small> backers</small></p>
                </div>
                <button className="btn btn-default" onClick={this.backProject(1)}>Back!</button>
          </div>
  }
}

export default Challenge;
