import React from "react";
import { Affix, Badge, Col, Row } from "antd";
import classes from "../Product.module.css";
import HomeOutlined from "@ant-design/icons/es/icons/HomeOutlined";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import ThunderboltOutlined from "@ant-design/icons/es/icons/ThunderboltOutlined";
import UserOutlined from "@ant-design/icons/es/icons/UserOutlined";

const BottomMenu = ({countLike, countCart}) => (
  <Affix offsetBottom={0}>
    <div className={classes.footer}>
      <Row justify="space-around" align="middle" style={{ width: "100%" }}>
        <Col span={2}>
          <HomeOutlined className={classes.bigIcon} />
        </Col>
        <Col span={1}>
          <Badge size="small" count={countLike}>
            <HeartOutlined className={classes.bigIcon} />
          </Badge>
        </Col>
        <Col span={1}>
          <Badge size="small" style={{backgroundColor:"#52c41a"}}  count={1}>
          <ThunderboltOutlined className={classes.bigIcon} />
          </Badge>
        </Col>
        <Col span={1}>
          <Badge size="small" count={countCart}>
            <ShoppingCartOutlined className={classes.bigIcon} />
          </Badge>
        </Col>
        <Col span={1}>
          <UserOutlined className={classes.bigIcon} />
        </Col>
      </Row>
    </div>
  </Affix>
);

export default BottomMenu;
