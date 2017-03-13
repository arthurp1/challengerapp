import React, { Component } from 'react'

class Challenge extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div key={this.props.id} className="thumbnail">
              <img src={this.props.picture} />
                <div className="caption">
                    <h3>{this.props.username}</h3>
                      <p>{this.props.title}</p>
                      <p>{this.props.backNumber}<small> backers</small></p>
                      </div>
                </div>
  }
}

export default Challenge;
