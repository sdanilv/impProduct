import React from "react";
import classes from "./Panel.module.css";
import { LikeIcon, LikeIconFull, SendIcon } from "./Tools/Icons";

const Panel = ({ name, price, oldPrice, addLike, liked, removeLike }) => {
  return (
    <div className={classes.panel}>
      <div className={classes.namePanelContainer}>
        <div>{name}</div>
        <div className={classes.panelButtonContainer}>
          <div className={classes.sendIconButton}>
            <SendIcon />
          </div>
          <div>
            {liked ? (
              <LikeIconFull onClick={() => removeLike()} />
            ) : (
              <LikeIcon onClick={() => addLike()} />
            )}
          </div>
        </div>
      </div>
      <div className={classes.price}>
        <div>{price}&nbsp;UAH</div>
        <div className={classes.throughText}>{oldPrice}&nbsp;UAH</div>
      </div>
    </div>
  );
};

export default Panel;
