import React, { Component } from 'react'
import axios from 'axios'

class ChallengeList extends Component {
  constructor(props) {
    super(props)
    this.state = { posts: [] }
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
  backProject(amount) {
  }
  render () {
    const list = this.state.posts.map( (post) => {
      return <div key={post.id} className="thumbnail">
                <img src={post.picture} alt={post.title} onClick={backProject(1)}/>
                  <div className="caption">
                      <h3>{post.username}</h3>
                        <p>{post.title}</p>
                        <p>{post.backNumber}<small> backers</small></p>
                  </div>
                  <button className="btn btn-default" backed={post} onClick={backProject(1)}>Back Project</button>
            </div>
    });

    return <div>{list}</div>
    }
}

export default ChallengeList
