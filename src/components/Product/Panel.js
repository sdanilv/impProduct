import React from "react";
import classes from "./Panel.module.css";
import ButtonPanel from "../Tools/ButtonPanel";

const Panel =props => {
    const {name, price} = props;
    return(
  <div className={classes.panel}>
    <div className={classes.namePanelContainer}>
      <div>{name}</div>
     <ButtonPanel {...props}/>
    </div>
    <div className={classes.price}>
      <div>{price}&nbsp;грн</div>
      <div className={classes.throughText}>{price + price * 0.2}&nbsp;грн</div>
    </div>
  </div>
)};

export default Panel;
