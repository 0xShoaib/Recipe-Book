import React from "react";
import { Link } from "react-router-dom";
import Animate from "animate.css-react";

import classes from "./HomePage.module.css";
import Topbar from "../Topbar/Topbar";

function HomePage() {
  return (
    <div className="HomePageWrapper">
      <Topbar />
      <div className={classes.Banner}></div>

      <div className={classes.Text}>
        <Animate appear="fadeInUp" durationAppear={3000} component="h1">
          <h1>
            A messy kitchen
            <br /> is a sign of happiness.
          </h1>
        </Animate>
        <Link to="/recipe">
          <Animate appear="fadeInUp" durationAppear={3000} component="div">
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
