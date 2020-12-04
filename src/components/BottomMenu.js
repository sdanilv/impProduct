import React from "react";
import { Affix, Badge, Col, Row } from "antd";
import classes from "./BottomMenu.module.css";

import UserOutlined from "@ant-design/icons/es/icons/UserOutlined";
import { AddIcon, HomeIcon, LikeIcon, SearchIcon } from "./Tools/Icons";

const BottomMenu = ({ countLike, countCart }) => (
  <Affix offsetBottom={0}>
    <div className={classes.footer}>
      <Row justify="space-around" align="middle" style={{ width: "100%" }}>
        <HomeIcon />
        <SearchIcon />
        <AddIcon />
        <LikeIcon />
        <img className={classes.bottomAva} src="https://mcusercontent.com/ece05dfe187189e74ea128620/images/bcdc32ce-5eae-4db9-9d40-ce08395bb0c4.jpg" alt="bottomAva" />
      </Row>
    </div>
  </Affix>
);

export default BottomMenu;
