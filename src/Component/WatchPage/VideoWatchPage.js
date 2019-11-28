import React, { Component } from "react";
import axios from "axios";
import Animate from "animate.css-react";

import classes from "./VideoWatchPage.module.css";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

class VideoWatchPage extends Component {
  state = {
    RecipeData: [],
    LoadingStatus: true
  };
  componentDidMount() {
    const recipeId = this.props.match.params.recipeId;
    if (
      recipeId !== undefined &&
      recipeId !== "" &&
      recipeId !== null &&
      recipeId > 0
    ) {
      axios
        .get(`https://5d76bf96515d1a0014085cf9.mockapi.io/video/${recipeId}`)
        .then(response => {
          this.setState({ RecipeData: response.data, LoadingStatus: false });
        })
        .catch(() => {
          console.log("Failed to Data");
          this.props.history.push("/not-found");
        });
    } else {
      this.props.history.push("/not-found");
    }
  }

  render() {
    return (
      <div>
        <Topbar
          loginStatus={this.props.loginStatus}
          onUserLogedOut={this.props.onUserLogedOut}
        />
        {this.state.LoadingStatus ? (
          <Loader />
        ) : (
          <div className={classes.Container}>
            <Animate appear="fadeInDown" durationAppear={2000}>
              <div className={classes.PlayerWrapper}>
                <iframe
                  className={classes.VideoPlayer}
                  src={`https://player.vimeo.com/video/${this.state.RecipeData.vimeoId}`}
                  frameBorder="0"
                  webkitallowfullscreen="yes"
                  mozallowfullscreen="yes"
                  allowFullScreen="yes"
                  title="Video Player"
                ></iframe>
              </div>
            </Animate>
            <Animate appear="fadeInDown" durationAppear={1000}>
              <div className={classes.VideoStats}>
                <p className={classes.Views}>
                  {this.state.RecipeData.views} Views
                </p>
                <div>
                  <i className="far fa-heart"></i>
                  <i className="far fa-comment-alt"></i>
                  <i className="far fa-bookmark"></i>
                </div>
              </div>
            </Animate>
            <Animate appear="fadeInUp" durationAppear={1000}>
              <div>
                <h1 className={classes.VideoTitle}>
                  {this.state.RecipeData.title}
                </h1>
                <p className={classes.VideoDescription}>
                  {this.state.RecipeData.description}
                </p>
              </div>
            </Animate>
          </div>
        )}

        <Footer />
      </div>
    );
  }
}
export default VideoWatchPage;
