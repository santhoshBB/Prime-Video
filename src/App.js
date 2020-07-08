import React, { Component, Fragment } from "react";
import Login from "./Component/AuthComponent/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Component/HeaderComponent/Header";
import Home from "./Component/HomePage/Home";
import Register from "./Component/AuthComponent/Register";
import Pagenotfound from "./Component/PageNotFound/Pnf";
import Reset from "./Component/AuthComponent/Reset";
import ListVideos from "./Component/MovieaddForm/ListVideos";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from "./Component/firebase/firebase";
import VideoUpload from "./Component/VideosComponent/VideoUploadForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      // onAuthStateChanged is used to monitored when sign in and sign out operations are triggred
    };
  }

  // TRY WITH THEN AND CATCH
  async componentDidMount() {
    await firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        // this.props.history.push("/");
        this.setState({ data: user });
        // if the user data is available store in above variable
      } else {
        this.props.history.push("/login");
        this.setState({ data: "" });
      }
    });
  }

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <header>
            <Header details={this.state.data} />
          </header>
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/password-reset" exact component={Reset} />
              {this.state.data ? (
                <Fragment>
                  <Route path="/list-videos" exact component={ListVideos} />
                  <Route path="/upload-videos" exact component={VideoUpload} />
                </Fragment>
              ) : null}
              <Route path="**" exact component={Pagenotfound} />
            </Switch>
          </main>
        </BrowserRouter>
      </Fragment>
    );
  }
}
export default App;
