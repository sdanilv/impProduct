import React from "react";
import classes from "./AnotherText.module.css";
import {Link} from "react-router-dom";

const AnotherText = () => (
  <div className={classes.anotherTextContainer}>
    <span className={classes.anotherText}> Еще из данного магазина</span>
    <span
      className={classes.anotherTextContainerAll}
    >
        <Link to="\home">
      Все
        </Link>
    </span>
  </div>
);

export default AnotherText;
