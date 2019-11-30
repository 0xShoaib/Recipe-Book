import React, { Component } from "react";
import Animate from "animate.css-react";

import classes from "./Login.module.css";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  userData = [];

  onSubmit = e => {
    e.preventDefault();

    this.props.onUserLogedIn();

    this.props.history.push("/recipe");

    localStorage.setItem("loginStatus", true);
  };
  onInputChange = (e, name) => {
    switch (name) {
      case "username":
        this.setState({ username: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <Topbar />
        <Animate appear="zoomIn" durationAppear={1000}>
          <div className={classes.Container}>
            <form className={classes.Form} onSubmit={this.onSubmit}>
              <input
                className={classes.InputField}
                type="text"
                name="username"
                placeholder="Username"
                required
                value={this.state.username}
                onChange={e => this.onInputChange(e, "username")}
              />
              <input
                className={classes.InputField}
                type="password"
                name="password"
                placeholder="Password"
                required
                value={this.state.password}
                onChange={e => this.onInputChange(e, "password")}
              />
              <input className={classes.SubmitBtn} type="submit" />
            </form>
          </div>
        </Animate>
        <Footer />
      </div>
    );
  }
}
export default Login;
