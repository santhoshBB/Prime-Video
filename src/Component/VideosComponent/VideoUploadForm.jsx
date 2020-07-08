import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase/firebase";

class VideoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null, //storing video obj
      url: "",
      video_title: "",
    };
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleUploadchange = this.handleUploadchange.bind(this);
    this.handleOnvideosubmit = this.handleOnvideosubmit.bind(this);
  }
  handleOnchange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleUploadchange(e) {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      let Uvideos = e.target.files[0];
      this.setState({ video: Uvideos });
    }
  }
  handleOnvideosubmit(e) {
    e.preventDefault();
    let { video, video_title } = this.state;
    let uploadTask = firebase.storage().ref(`/videos/${video.name}`).put(video);
    // EventS
    uploadTask.on(
      "state_changed",
      () => {}, //progress
      () => {}, //err handling
      () => {
        //   storing in Storage firebase
        firebase
          .storage()
          .ref("videos")
          .child("video.name")
          .getDownloadURL()
          .then((url) => {
            this.setState({ url }, () => {
              // store in fB Database
              let allVideoData = this.state;
              firebase
                .database()
                .ref("videos")
                .push({
                  ...allVideoData,
                }); //url and url are same so instead of url:url oly one url
            });
          })
          .catch((err) => console.log(err));
      }
    );
  }
  render() {
    return (
      <Fragment>
        <section className="vh-100 align-items-center justify-content-center d-flex registerComponent">
          <div className=" col-md-3 mx-auto">
            <img
              src="images/Logo_black.png"
              alt="logo"
              className="inside_logo my-4"
            />
            <div className="card-body card">
              <h1 className="h4">Upload Video</h1>
              <p style={{ fontSize: "12px" }}>
                upload the video on firebase associated with your Amazon
                account.
              </p>
              <form onSubmit={this.handleOnvideosubmit}>
                <div className="form-group">
                  <input
                    type="file"
                    name="upload_video"
                    className="form-control"
                    onChange={this.handleUploadchange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="video_title"
                    className="form-control"
                    placeholder="Enter Video title"
                    value={this.state.video_title}
                    onChange={this.handleOnchange}
                    required
                  />
                </div>
                <div className="form-group">
                  <button className="a-button-primary btn-block my-4">
                    continue
                  </button>
                </div>
                <hr />
                <p>
                  <Link to="/login">login</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default VideoUpload;
