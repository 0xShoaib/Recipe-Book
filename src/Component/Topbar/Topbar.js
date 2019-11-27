import React from "react";
import { Link } from "react-router-dom";
import Animate from "animate.css-react";

import classes from "./Topbar.module.css";

const Topbar = () => {
  return (
    <div className={classes.navBar}>
      <Animate appear="slideInLeft" durationAppear={2000}>
        <div className={classes.logo}>
          <h1>Recipe</h1>
        </div>
      </Animate>

      <div className={classes.menu}>
        <ul>
          <Animate appear="fadeInRight" durationAppear={1000}>
            <li>
              <Link to="/">Home</Link>
            </li>
          </Animate>
          <Animate appear="fadeInRight" durationAppear={1000}>
            <li>
              <Link to="/recipe">Recipes</Link>
            </li>
          </Animate>
          <Animate appear="fadeInRight" durationAppear={1000}>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </Animate>
          <Animate appear="fadeInRight" durationAppear={1000}>
            <li className={classes.signUp}>
              <Link to="/">Sign up</Link>
            </li>
          </Animate>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
