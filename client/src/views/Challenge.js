import React, { Component } from 'react';
import update from 'react-addons-update';

// load challenges


class Challenge extends Component {
  constructor(props) {
    super(props)
    // this.contribute = this.contribute.bind(this)
  }
  // contribute(amount, challenge_id, user_id) {
  //   console.log('challenge:' + challenge_id + ' backed with amount: ' + amount + ' by user: ' + user_id)
  //   const contribution = {
  //     amount: amount,
  //     challengeId: challenge_id,
  //     userId: user_id
  //   }
    // const that = this
    // axios.post("/contribution", contribution)
    // .then(function(result) {
    //     result.data.success ? console.log('sucessfully backed)') : that.setState({ error: result.data.error })
    // })
  render() {
    console.log('Props of Challenge')
    let curr_cont = Math.floor(Math.random() * 100) + 1
    let min_cont = 200
    let challengePercent = ( (curr_cont / min_cont) * 100 ) + '%'
    let challenge = this.props
    console.log(challenge)
    return <div key={challenge.id} className="card">
              <div className="card-image">
                <img src={ 'https://placeimg.com/400/225/people/' + challenge.id } alt={challenge.title} />
                <div className="nofocus"></div>
              </div>
                <div className="card-content">
                  <div className="card-firstline">
                    <div className="card-author"> {challenge.username}</div>
                    <div className="duetime">Wednesday 3pm</div>
                  </div>
                    <div className="card-title">{challenge.title}</div>
                      <div className="card-footer">
                        <button className="btn btn-default" onClick={() => challenge.contribute(23, challenge.id, 1)}>Back $1</button>
                        <div className="totalContributors">{challengePercent}<span className="subtext"> backed</span></div>
                        <div className="minContributions">${curr_cont}<span className="subtext"> collected</span></div>
                      </div>
                </div>
                <div className="progress">
                  <div className="determinate" style={{ width: challengePercent}}></div>
                </div>
          </div>
  }
}
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ setContribution }, dispatch);
// }

// export default connect(MapStateToProps, mapDispatchToProps)(Challenge)

export default Challenge
