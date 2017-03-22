import React, { Component } from 'react'
import axios from 'axios'
import ChallengeItem from './ChallengeItem'

class Updates extends Component {
  constructor(props) {
    super(props)
    this.state = { challenges: [] }
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  componentDidMount() {
    var that = this
    axios.get("https://api.myjson.com/bins/uhac7")
    .then(function(result) {
      console.log(result)
      that.setState({ challenges: result.data})
    })
  }
  render () {
    const list = this.state.challenges.map( (challenge) => {
      return <ChallengeItem key={challenge.id} {...challenge} />
    });

    return <div className="Page">{list}</div>
    }
}

export default Updates
