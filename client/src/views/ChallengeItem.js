import React, { Component } from 'react'

class ChallengeItem extends Component {
  backProject(amount, id) {
    console.log('project backed with amount:' + amount + 'by user: ' + id)
  }

  render() {
    console.log('Props of ChallengeItem')
    let challengePercent = ( (23 / 183) * 100 ) + '%'
    let challenge = this.props
    return <div key={challenge.id} className="collection-item">

              <div className="collection-author"> {challenge.title}</div>
                <div className="collection-content">
                      <p>{challenge.backNumber}<small> backers</small></p>
                </div>
                <div className="progress">
                  <div className="determinate" style={{ width: challengePercent}}></div>
                </div>
          </div>
  }
}

export default ChallengeItem;
