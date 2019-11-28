import React from "react";
import { Link } from "react-router-dom";
import Animate from "animate.css-react";

import classes from "./Topbar.module.css";

const Topbar = props => {
  return (
    <div className={classes.navBar}>
      <Animate appear={props.slideInLeft} durationAppear={2000}>
        <div className={classes.logo}>
          <Link to="/">
            <h1>Recipe</h1>
          </Link>
        </div>
      </Animate>

      <div className={classes.menu}>
        <ul>
          <Animate appear={props.fadeInRight} durationAppear={1000}>
            <li>
              <Link to="/">Home</Link>
            </li>
          </Animate>
          <Animate appear={props.fadeInRight} durationAppear={1000}>
            <li>
              <Link to="/recipe">Recipes</Link>
            </li>
          </Animate>
          <Animate appear={props.fadeInRight} durationAppear={1000}>
            {props.loginStatus ? (
              <li onClick={props.onUserLogedOut}>Logout</li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </Animate>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
