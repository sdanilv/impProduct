import React from "react";
import {Affix, Col, Row, Typography} from "antd";
import classes from "../Product.module.css";
import QrcodeOutlined from "@ant-design/icons/es/icons/QrcodeOutlined";
import SearchOutlined from "@ant-design/icons/es/icons/SearchOutlined";
import PlusSquareOutlined from "@ant-design/icons/es/icons/PlusSquareOutlined";
import GlobalOutlined from "@ant-design/icons/es/icons/GlobalOutlined";
const { Text } = Typography;
const TopMenu = () => (
  <Affix offsetTop={0}>
    <div className={classes.header}>
      <Row
        align="middle"
        justify="center"
        style={{ width: "100%", border: "50px gray" }}
      >
        <Col span={1} offset={0}>
          <QrcodeOutlined className={classes.bigIcon} />
        </Col>
        <Col span={1} offset={2}>
          <SearchOutlined className={classes.bigIcon} />
        </Col>
        <Col span={1} offset={6}>
          <PlusSquareOutlined className={classes.bigIcon} />
        </Col>
        <Col span={3} offset={6}>
          <Text>UAH</Text>
        </Col>
        <Col span={1} offset={1}>
          <GlobalOutlined className={classes.bigIcon} />
        </Col>
      </Row>
    </div>
  </Affix>
);

export default TopMenu;
