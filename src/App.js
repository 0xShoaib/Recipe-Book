import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./Component/Homepage/HomePage";
import Recipe from "./Component/Recipe/Recipe";
import VideoWatchPage from "./Component/WatchPage/VideoWatchPage";
import Login from "./Component/Login/Login";
import NotFound from "./Component/NotFound/NotFound";

class App extends React.Component {
  state = {
    loginStatus: localStorage.getItem("loginStatus") === "true"
  };

  onUserLogedIn = () => {
    this.setState({ loginStatus: true });
  };

  onUserLogedOut = () => {
    this.setState({ loginStatus: false });
    localStorage.setItem("loginStatus", false);
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              path="/recipe/:recipeId"
              render={routeProps =>
                this.state.loginStatus ? (
                  <VideoWatchPage
                    {...routeProps}
                    loginStatus={this.state.loginStatus}
                    onUserLogedOut={this.onUserLogedOut}
                  />
                ) : (
                  <Login {...routeProps} onUserLogedIn={this.onUserLogedIn} />
                )
              }
            />

            <Route
              path="/login"
              render={routeProps => (
                <Login {...routeProps} onUserLogedIn={this.onUserLogedIn} />
              )}
            />

            <Route path="/not-found" component={NotFound} />

            <Route
              path="/recipe"
              render={() => (
                <Recipe
                  loginStatus={this.state.loginStatus}
                  onUserLogedOut={this.onUserLogedOut}
                />
              )}
            />

            <Route
              exact
              path="/"
              render={() => (
                <HomePage
                  onUserLogedOut={this.onUserLogedOut}
                  loginStatus={this.state.loginStatus}
                />
              )}
            />

            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
