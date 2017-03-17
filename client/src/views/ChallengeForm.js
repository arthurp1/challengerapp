import React, { Component } from 'react';
// import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import axios from 'axios'


class Cnew extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '', password: '', date: '', focused: ''}
    this.createChallenge = this.createChallenge.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState( { [event.target.name]: event.target.value })
  }

  createChallenge(event) {
    event.preventDefault()
    const that = this

    let challengeinput = {
      userId: this.state.userid,
      title: this.state.title,
      media: this.state.media,
      dueDate: this.state.duedate,
      dueTime: this.state.duetime,
      minStake: this.state.minstake,
      tags: this.state.tags
    }

    console.log('challengeinput')
    console.log(challengeinput)
    axios.post("/createchallenge", challengeinput)
    .then(function(result) {
        result.data.success ? that.props.nextPage('clist') : that.setState({ error: result.error })
      })
  }

  render() {
    return (
    <div className="App">
      <div className="Page">
        <div className="Section">
          <h3> New Challenge </h3>
            <form className="form">

              <div className="input-field">
                <input type="text" className="form-control" name="title" placeholder="Challenge title.." onChange={this.onInputChange} value={this.state.title} />
              </div>

              <div className="input-field">
                <div className="input-label">
                  <div className="large-label">Upload</div>
                </div>
                <input type="file" name="media" accept="image/*" className="form-control" value={this.state.media} onChange={this.onInputChange} />
              </div>


              <div className="input-field">
                <div className="input-label">Deadline</div>
              <div className="deadline">
                <input className="duedate half-page" name="duedate" type="date" value={this.state.duedate} onChange={this.onInputChange} />
                <input className="duetime" name="duetime" type="time" value={this.state.duetime} onChange={this.onInputChange} />
              </div>
            </div>

            <div className="input-field">
              <div className="input-label">Minimum Backers</div>
            <div className="minstake">
              <input name="minstake" type="text" value={this.state.minstake} onChange={this.onInputChange} />
            </div>
          </div>

          <div className="input-field">
            Tags
            <div className="input-label"></div>
          <div className="tags">
            <input name="tags" type="text" value={this.state.tags} onChange={this.onInputChange} />
          </div>
        </div>
              <button onClick={this.createChallenge} className="btn btn-default">Challenge Accepted!</button>
          </form>
            </div>
        </div>
      </div>
    )
  }
}

export default Cnew
