import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import firebase from "../../Component/firebase/firebase";
import "./auth.css";
import { toast } from "react-toastify";

toast.configure();
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // username: "",
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleOnsubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    try {
      let data = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (data.user.emailVerified) {
        this.props.history.push("/");
        toast.info(`Welcome Santhosh`);
      } else {
        toast.error(`Your mail ID is not verified please check ${email}`);
      }
    } catch (err) {
      toast.warning(err.message);
    }
    this.setState({
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <Fragment>
        <div className="image">
          <img src="images/Logo_black.png" className="reglogo" alt="image" />
        </div>
        <form onSubmit={this.handleOnsubmit}>
          <div className="register">
            <div className="sub">
              <p className="heading my-4">Sign-In</p>
              <label htmlFor="email">Email (phone for mobile accounts)</label>
              <input type="email" name="email" onChange={this.handleChange} />
              <label htmlFor="password" className="mt-4 ">
                Password
                <span>
                  <Link to="/Password-reset" className="text float-right">
                    <p className="text">Forgot Your Password?</p>
                  </Link>
                </span>
              </label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
              />
              <button className="button" type="submit">
                Sign-In
              </button>
              <p className="text mt-2">
                By creating an account, you agree to Amazon's
                <a href="#"> Conditions of Use</a> and
                <a href="#"> Privacy Notice</a>.
              </p>
              <p className="text mt-2">
                <input type="checkbox" />
                Keep me signed in. <a href="#"> Details</a>
              </p>

              <p className="mt-3 text-center">New to Amazon?</p>
              <Link to="/register">
                <button className="button2 btn-block" type="submit">
                  Create your Amazon account
                </button>
              </Link>
            </div>
          </div>
        </form>
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
export default Login;
