import React, { Component } from 'react'

class ChallengeItem extends Component {
  render() {
    console.log('Props of ChallengeItem')
    let challengePercent = ( (23 / 183) * 100 ) + '%'
    let challenge = this.props
    return <div key={challenge.id} className="collection-item">
              <div className="collection-author"> {challenge.title}</div>
                <div className="collection-content">
                      <p><small> backers</small></p>
                </div>
              </div>
  }
}

export default ChallengeItem;
