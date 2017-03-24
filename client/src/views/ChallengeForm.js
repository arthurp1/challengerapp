import React, { Component } from 'react';
// import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import axios from 'axios'
import Dropzone from 'react-dropzone';


class Cnew extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '', password: '', date: '', focused: '', minbet: '$1', minbackers:'10', uploadedFileCloudinaryUrl: ''}
    this.createChallenge = this.createChallenge.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
   let upload = axios.post(CLOUDINARY_UPLOAD_URL)
                       .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                       .field('file', file);

   upload.end((err, response) => {
     if (err) {
       console.error(err);
     }

     if (response.body.secure_url !== '') {
       this.setState({
         uploadedFileCloudinaryUrl: response.body.secure_url
       });
     }
   });
 }

  onInputChange(event) {
    this.setState( { [event.target.name]: event.target.value })
  }

  createChallenge(event) {
    event.preventDefault()
    const that = this

    let challengeinput = {
      userId: 1,
      title: this.state.title,
      photos: this.state.media,
      dueDate: '2017-04-04 12:23:00',
      minStake: this.state.minstake,
      tags: this.state.tags,
      body: 'hoi'
    }

    console.log('challengeinput')
    console.log(challengeinput)
    axios.post("/createchallengehandler", challengeinput)
    .then(function(result) {
        console.log(result)
        result.data.success ? console.log(result) : that.setState({ error: result.error })
      })
  }
  render() {
    return (
    <div className="App">
      <div className="Page">
        <div className="Section">
            <form className="form" encType="multipart/form-data">
              <Dropzone
               multiple={false}
               accept="image/*"
               onDrop={this.onImageDrop.bind(this)}>
               <p>Drop an image or click to select a file to upload.</p>
             </Dropzone>

             <div>{this.state.uploadedFileCloudinaryUrl === '' ? null
               : <div>
                    <p>{this.state.uploadedFile.name}</p>
                    <img src={this.state.uploadedFileCloudinaryUrl} />
                  </div>}
             </div>
            <div className="image-upload">
              <label htmlFor="file-input">
                <i className="material-icons">photo_camera</i>
                <div className="input-text">Capture a video or image</div>
              </label>
              <input type="file" capture="camera" name="media" accept="image/*" id="file-input" value={this.state.media} onChange={this.onInputChange} />
            </div>
              <div className="input-field">
                <input type="text" className="form-control" name="title" placeholder="Challenge title.." onChange={this.onInputChange} value={this.state.title} />
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
              <input className="half-page" name="minstake" placeholder="5" type="text"  onChange={this.onInputChange} /><span>backers</span>
              <input className="half-page" name="minstake" placeholder="$1" type="text" onChange={this.onInputChange} /> <span>each</span>
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
