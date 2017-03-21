import React, { Component } from 'react'

class Challenge extends Component {
  constructor(props) {
    super(props)
    this.contribute = this.contribute.bind(this)
  }
  contribute(amount, challenge_id, user_id) {
    console.log('challenge:' + challenge_id + ' backed with amount: ' + amount + ' by user: ' + user_id)
  }
  render() {
    console.log('Props of Challenge')
    let challengePercent = ( (23 / 183) * 100 ) + '%'
    let challenge = this.props
    console.log(this.props)
    return <div key={challenge.id} className="card">
              <div className="card-author"> {challenge.username}</div>
              <div className="card-image">
                <img src={ 'https://placeimg.com/400/225/people/' + challenge.id } alt={challenge.title} onClick={this.contribute(1, challenge.id, '23')}/>
              </div>
                <div className="card-content">
                    <div className="card-title">{challenge.username}</div>
                      <p>{challenge.title}</p>
                      <p>{challenge.backNumber}<small> backers</small></p>
                </div>

                <button className="btn btn-flat" onClick={this.contribute(1, challenge.id, '23')}>Back $1</button>
                <div className="progress">
                  <div className="determinate" style={{ width: challengePercent}}></div>
                </div>
          </div>
  }
}

export default Challenge;
