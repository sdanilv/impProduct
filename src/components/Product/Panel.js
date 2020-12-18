import React from "react";
import classes from "./Panel.module.css";
import { LikeIcon, LikeIconFull } from "../Tools/Icons";

const Panel = ({ name, price, addLike, liked, removeLike }) => (
  <div className={classes.panel}>
    <div className={classes.namePanelContainer}>
      <div>{name}</div>
      <div className={classes.panelButtonContainer}>
          {liked ? (
            <LikeIconFull onClick={() => removeLike()} />
          ) : (
            <LikeIcon onClick={() => addLike()} />
          )}
      </div>
    </div>
    <div className={classes.price}>
      <div>{price}&nbsp;грн</div>
      <div className={classes.throughText}>{price + price * 0.2}&nbsp;грн</div>
    </div>
  </div>
);

export default Panel;
