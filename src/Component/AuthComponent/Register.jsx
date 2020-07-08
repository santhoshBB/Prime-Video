import React, { Component, Fragment } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, withRouter } from "react-router-dom";
import "./auth.css";
import firebase from "../../Component/firebase/firebase";
import md5 from "md5";

toast.configure();
class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      Confirm_password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleOnsubmit(e) {
    try {
      e.preventDefault();
      let { email, password } = this.state;

      // firebase authentication creating user
      let userData = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      userData.user.sendEmailVerification();
      toast.warning(
        `A verification mail has been sent to ${email} address please verify!!`,
        { autoClose: "false" }
      );
      // redirecting
      this.props.history.push("/login");
      toast.success("successfully registered!!");

      // updating profile this meth includes phone photo id
      await userData.user.updateProfile({
        displayName: "santhosh",
        photoURL: `https://www.gravatar.com/avatar/${md5(
          userData.user.email
        )}?d=identicon`,
        RegistrationDate: new Date().toString(),
      });

      // firebase additional info of user in database
      firebase
        .database()
        .ref()
        .child("/users" + userData.user.uid)
        .set({
          email: userData.user.email,
          photoURL: userData.user.photoURL,
          displayName: userData.user.displayName,
          uid: userData.user.uid,
        });
      this.setState({
        username: "",
        email: "",
        password: "",
        Confirm_password: "",
      });
    } catch (err) {
      console.log(err);
      toast.error(err.message, { autoClose: "false" });
    }
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
              <p className="heading">Create account</p>
              <label htmlFor="username">Your name</label>
              <input type="text" name="username" onChange={this.handleChange} />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" onChange={this.handleChange} />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="At least 6 charecters "
                onChange={this.handleChange}
              />
              <p className="text">
                i- Passwords must be at least 6 characters.
              </p>
              <label htmlFor="Confirm_password">Re-enter password</label>
              <input
                type="password"
                name="Confirm_password"
                onChange={this.handleChange}
              />
              <button className="button" type="submit">
                Create your Amazon account
              </button>

              <p className="text">
                By creating an account, you agree to Amazon's
                <a href="#"> Conditions of Use</a> and
                <a href="#"> Privacy Notice</a>.
              </p>
              <p className="text mt-4 pt-2">
                Already have an account?
                <Link to="/login"> Sign-In</Link>
              </p>
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
export default withRouter(Register);
