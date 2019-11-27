import React from "react";
import { Link } from "react-router-dom";
import Animate from "animate.css-react";

import classes from "./NotFound.module.css";

const Login = () => {
  return (
    <div>
      <div className={classes.Container}>
        <div className={classes.Text}>
          <Animate appear="wobble" durationAppear={2000}>
            <h1>404</h1>
          </Animate>

          <Animate appear="fadeInUp" durationAppear={2000}>
            <p>Look like the page you're looking for doesn't exist.</p>
          </Animate>

          <Link to="/">
            <Animate appear="fadeInUp" durationAppear={3000}>
              <div className={classes.Btn}>
                <p>Home</p>
              </div>
            </Animate>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
