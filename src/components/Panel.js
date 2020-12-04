import React from "react";
import classes from "./Panel.module.css";
import { Button, Typography } from "antd";
import { useState } from "react";
import { LikeIcon, SendIcon } from "./Tools/Icons";
const { Text } = Typography;
const Panel = ({ name, price, oldPrice, addLike, addCart, removeLike }) => {
  const [like, setLike] = useState(false);
  const heartHandler = () => {
    setLike(!like);
    if (like) removeLike();
    else addLike();
  };
  return (
    <div className={classes.panel}>
      <div className={classes.namePanelContainer}>
        <div  >
          {name}
        </div>
        <div className={classes.panelButtonContainer}>
          <div className={classes.sendIconButton}>
            <SendIcon />
          </div>
          <LikeIcon />
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
