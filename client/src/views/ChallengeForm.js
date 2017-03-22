import React, { Component } from 'react';
// import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import axios from 'axios'


class Cnew extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '', password: '', date: '', focused: '', minbet: '$1', minbackers:'10'}
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
      category: this.state.category, //*dit moet een array zijn
      minStake: this.state.minstake,
      tags: this.state.tags,
      media: this.state.media,
      body: this.state.body, //*Jurgen
      title: this.state.title //*Jurgen
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
              <div className="split-input">
                <input className="duedate half-page" name="duedate" type="date" value={this.state.duedate} onChange={this.onInputChange} />
                <input className="duetime" name="duetime" type="time" value={this.state.duetime} onChange={this.onInputChange} />
              </div>
            </div>
            <div className="advanced-hide">
            <div className="input-field">
              <div className="input-label">Minimum Backers</div>
            <div className="minstake split-input">
              <input className="half-page" name="minstake" placeholder="5" type="text" value={this.state.minbackers} onChange={this.onInputChange} /><span>backers</span>
              <input className="half-page" name="minstake" placeholder="$1" type="text" value={this.state.minbet} onChange={this.onInputChange} /> <span>each</span>
            </div>
          </div>

          <div className="input-field">
            Tags
            <div className="input-label"></div>
          <div className="tags">

            <input name="tags" type="text" value={this.state.tags} onChange={this.onInputChange} />
          </div>
        </div>
        </div>
              <button onClick={this.createChallenge} className="btn btn-default">Create Challenge</button>
          </form>
            </div>
        </div>
      </div>
    )
  }
}

export default Cnew
