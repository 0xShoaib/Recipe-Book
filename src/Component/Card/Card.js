import React from "react";
import { Link } from "react-router-dom";
import classes from "./Card.module.css";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Card = props => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <div
        className={classes.Card}
        id={props.id}
        style={{ pointerEvents: props.pointerEvents }}
      >
        <Link to={`/recipe/${props.id}`}>
          <div
            className={classes.ComingSoon}
            style={{ display: props.display }}
          >
            Coming Soon
          </div>
          <div className={classes.Thumbnail}>
            <img src={props.thumbnail} alt="Thumbnail" />
          </div>
          <div className={classes.Title}>
            <p>{props.title}</p>
          </div>
        </Link>
      </div>
    </ScrollAnimation>
  );
};
export default Card;
