import React from "react";
import classes from "./Footer.module.css";

import Animate from "animate.css-react";

const Footer = () => {
  return (
    <div className={classes.Text}>
      <Animate appear="fadeIn" durationAppear={3000}>
        <p>
          Designed By <span>Shoaib Sayyed</span>
        </p>
      </Animate>
    </div>
  );
};

export default Footer;
