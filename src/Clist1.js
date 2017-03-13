import React, { Component } from 'react'
import Challenge from './Citem'
import axios from 'axios'

class ChallengeList extends Component {
  constructor(props) {
    super(props)
    this.state = { posts: []}
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  componentDidMount() {
    var that = this
    axios.get("https://api.myjson.com/bins/uhac7")
    .then(function(result) {
      console.log(result)
      that.setState({ posts: result.data})
    })
  }
  render () {
    const list = this.state.posts.map( (post) => {
      return <Challenge key={post.id} {...this.state} />;
    });

    return <div>{list}</div>
    }
}

export default ChallengeList
