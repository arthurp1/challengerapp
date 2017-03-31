import React, { Component } from 'react'
import axios from 'axios'
import Challenge from './Challenge'

class ChallengeList extends Component {
  constructor(props) {
    super(props)
    this.state = { challenges: [] }
    this.componentWillMount = this.componentWillMount.bind(this)
    this.contribute = this.contribute.bind(this)
  }
  contribute(amount, challenge_id, user_id) {
    console.log('challenge:' + challenge_id + ' backed with amount: ' + amount + ' by user: ' + user_id)
    // let contribution = {
    //   amount: amount,
    //   challengeId: challenge_id,
    //   userId: user_id
    // }
    // const that = this
    // axios.post("/contribution", contribution)
    // .then(function(result) {
    //     result.data.success ? that.setState( ) : that.setState({ error: result.data.error })
    // })
  }
  componentWillMount() {
    var that = this
    axios.get("https://api.myjson.com/bins/uhac7")
    .then(function(result) { that.setState({ challenges: result.data}) })
  }
  render () {
    const list = this.state.challenges.map( (challenge) => {
      return <Challenge key={challenge.id} {...challenge} contribute={this.contribute} />
    });

    return <div className="Page collection news-feed">{list}</div>
    }
}

export default ChallengeList

//press button -> send result
