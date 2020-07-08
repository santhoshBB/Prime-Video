import React, { Component, Fragment } from "react";
import "../AuthComponent/auth.css";
import firebase from "../../Component/firebase/firebase";
import { toast } from "react-toastify";

toast.configure();
class Reset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }

  handleOnchange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleOnsubmit(e) {
    e.preventDefault();
    let { email } = this.state;
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      this.props.history.push("/login");
      toast.dark(`To Reset the password please check ${email} `);
    } catch (err) {
      toast.error(err.message);
      this.props.history.push("/password-reset");
    }
    this.setState({ email: "" });
  }

  render() {
    return (
      <Fragment>
        <div className="image">
          <img src="images/Logo_black.png" className="reglogo" alt="image" />
        </div>
        <form onSubmit={this.handleOnsubmit}>
          <div className="register">
            <div className="sub p-4">
              <h3>Password assistance</h3>
              <p className="text">
                Enter the email address or mobile phone number associated with
                your Amazon account.
              </p>
              <label htmlFor="email" className="mt-3">
                Email or mobile phone number
              </label>
              <input type="email" name="email" onChange={this.handleOnchange} />

              <button className="button" type="submit">
                Continue
              </button>
            </div>
          </div>
        </form>
        <h5 className="text-center mt-3">
          Has your email or mobile number changed?
        </h5>
        <p className="text text-center">
          If you no longer use the email address associated with your <br />
          Amazon account, you may contact <a href="#"> Customer Service </a> for
          <br /> help restoring access to your account.
        </p>

        <footer>
          <hr />
          <div className="foot">
            <a href="#" className="text">
              Conditions of Use
            </a>
            <a href="#" className="text">
              Privacy Notice
            </a>
            <a href="#" className="text">
              Help
            </a>
            <p className="text">
              © 1996-2020, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </footer>
      </Fragment>
    );
  }
}
export default Reset;
