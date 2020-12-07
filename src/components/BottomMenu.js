import React from "react";
import { Badge, Row } from "antd";
import classes from "./BottomMenu.module.css";

import { AddIcon, HomeIcon, LikeIcon, SearchIcon } from "./Tools/Icons";

const BottomMenu = ({ countLike, seeLikedCards, seeAllCards }) => (
  <div className={classes.footer}>
    <Row justify="space-around" align="middle" style={{ width: "100%" }}>
      <HomeIcon onClick={() => seeAllCards()} />
      <SearchIcon />
      <AddIcon />
      <Badge size="small" count={countLike}>
        <LikeIcon onClick={() => seeLikedCards()} />
      </Badge>
      <img
        className={classes.bottomAva}
        src="https://mcusercontent.com/ece05dfe187189e74ea128620/images/bcdc32ce-5eae-4db9-9d40-ce08395bb0c4.jpg"
        alt="bottomAva"
      />
    </Row>
  </div>
);

export default BottomMenu;
