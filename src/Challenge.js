import React, { Component } from 'react'

class Challenge extends Component {
  backProject(e) {
    console.log('project backed with amount:' + e)
  }
  render() {
    console.log('Props of Challenge')
    let post = this.props
    return <div key={post.id} className="thumbnail">
              <img src={post.picture} alt={post.title} onClick={this.backProject(1)}/>
                <div className="caption">
                    <h3>{post.username}</h3>
                      <p>{post.title}</p>
                      <p>{post.backNumber}<small> backers</small></p>
                </div>
                <button className="btn btn-default" onClick={this.backProject(1)}>Back!</button>
          </div>
  }
}

export default Challenge;
