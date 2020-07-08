import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../firebase/firebase";
import "./header.css";
import { toast } from "react-toastify";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
    };
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.history.push("/login");
        toast.success(`Successfuly logged out`);
      })
      .catch((err) => toast.error(err.message));
  }

  render() {
    let { photoURL, displayName, email } = this.props.details;
    let Authuser = () => {
      return (
        <Fragment>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item font-weight-bold">
            <Link
              className="nav-link"
              to="/"
              // onClick={() => {
              //   console.log(this.props.details);
              // }}
              // }} for understanding purpose
            >
              <p>Home</p>
            </Link>
          </li>
          <li className="nav-item font-weight-bold ">
            {/* <Link className="nav-link" onClick={this.signOut} to="/login">
              <p>Sign-Out</p>
            </Link> */}
            {/* OR */}
            <a className="nav-link" href="#" onClick={this.signOut}>
              Logout
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <p>{email}</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src={photoURL} alt="displayName" className="profile_img" />
            </a>
          </li>
        </Fragment>
      );
    };

    let Nonauth = () => {
      return (
        <Fragment>
          {/* <li className="nav-item font-weight-bold">
            <Link className="nav-link" to="/register">
              <p>Register</p>
            </Link>
          </li> */}
          <li className="nav-item font-weight-bold ">
            <Link className="nav-link" to="/login">
              <div className="world">
                <i class="fa fa-globe" aria-hidden="true"></i>
                <span>EN</span>
                <i class="fa fa-caret-down" aria-hidden="true"></i>
              </div>
            </Link>
          </li>

          <li className="nav-item font-weight-bold mr-3 pr-3 ">
            <Link className="nav-link" to="/login">
              <p>Sign In</p>
            </Link>
          </li>
        </Fragment>
      );
    };
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary nav">
          <div>
            <Link className="navbar-brand" to="/">
              <img
                src="images/images.png"
                alt="logo"
                className="avlogo ml-3 mt-1 pl-3"
              />
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {this.props.details ? <Authuser /> : <Nonauth />}
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}
export default withRouter(Header);
