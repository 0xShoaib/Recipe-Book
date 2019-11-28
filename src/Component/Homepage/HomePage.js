import React from "react";
import { Link } from "react-router-dom";
import Animate from "animate.css-react";

import classes from "./HomePage.module.css";
import Topbar from "../Topbar/Topbar";

function HomePage(props) {
  return (
    <div className="HomePageWrapper">
      <Topbar
        slideInLeft="slideInLeft"
        fadeInRight="fadeInRight"
        onUserLogedOut={props.onUserLogedOut}
        loginStatus={props.loginStatus}
      />
      <div className={classes.Banner}></div>

      <div className={classes.Text}>
        <Animate appear="fadeInUp" durationAppear={3000}>
          <h1>
            A messy kitchen
            <br /> is a sign of happiness.
          </h1>
        </Animate>
        <Link to="/recipe">
          <Animate appear="fadeInUp" durationAppear={3000}>
            <div className={classes.Btn}>
              <p>Discover</p>
            </div>
          </Animate>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
