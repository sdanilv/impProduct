import React from "react";
import classes from "./LinkToShop.module.css";
import { Avatar } from "antd";
const LinkToShop = ({ avaSrc, shopName, href }) => (
  <div className={classes.linkToShop}>
    <div>
      <img
        className={classes.ava}
        src={
          "https://mcusercontent.com/ece05dfe187189e74ea128620/images/bcdc32ce-5eae-4db9-9d40-ce08395bb0c4.jpg"
        }
      />
    </div>
    <div className={classes.descript}>
      <div className={classes.shopName}>
        В магазин <a href={href}>{shopName}</a>
      </div>
      <div className={classes.city}>Киев</div>
    </div>
  </div>
);

export default LinkToShop;
