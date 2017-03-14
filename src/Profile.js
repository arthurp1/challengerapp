import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUser } from './actions/index'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = { user: [] }
    this.componentWillMount = this.componentWillMount.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  render() {
    console.log('Profile rendered')
    const profile = this.state.user.map( (user) => {
      console.log('this data came back:')
      console.log(user)
      return (
        <div className="user-profile Page">
          <img className="img-circle" src={user.picture.large} alt={user.name.first} />
          <div className="user-name"><h3>{user.login.username}</h3> </div>
          <span className="karma"> 23 karma </span>
          <div class="panel panel-default">
            <div class="panel-body">
              Basic panel example
            </div>
          </div>

        </div>
      )
   })
   return <div> {profile} </div>
   }
}

function mapStateToProps(state) {
  return  { user: state.user }
}

export default connect(mapStateToProps)(Profile);
