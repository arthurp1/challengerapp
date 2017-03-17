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
      dueDate: this.state.duedate,
      dueTime: this.state.duetime,
      dueInterval: this.state.interval,
      category: this.state.category,
      media: this.state.media
    }
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
              <div className="form-group">
                  <input type="text" className="form-control" name="title" placeholder="Challenge title.." onChange={this.onInputChange} value={this.state.title} />
              </div>
              <div className="form-group">
                <input type="file" name="pic" accept="image/*" className="form-control" />
              </div>
            <div className="showtime form-group group-inline">
              <div className="input-label">
                <div className="large-label">Showtime</div>
              </div>
                <input className="showdate" name="show-date" type="date" />
                <select className="showtime" name="show-time">
                  <option>09:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                </select>
            </div>



              <div className="min-stake form-group group-inline">
                  <div className="input-label">Stake Minimum<small className="subtext">Total stakes in the game</small> </div>
                  <div className="input-group">
                      <div className="input-group-addon">$</div>
                      <input type="text" className="form-control" id="inputamount" placeholder="Amount" />
                      <div className="input-group-addon">per backer</div>
                  </div>
              </div>

            <div className="min-stake form-group group-inline">
                <div className="input-label">Minimum Stake <small className="subtext">Minimum amount backed 24h before showtime </small> </div>
                  <div className="input-group">
                    <select name="minstack" className="form-control">
                      <option>$1</option>
                      <option>$3</option>
                      <option>$5</option>
                      <option>$10</option>
                      <option>$20</option>
                      <option>$30</option>
                    </select>
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
