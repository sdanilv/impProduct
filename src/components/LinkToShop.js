import React from 'react';
import {Avatar, Col, Row, Typography} from "antd";
const { Text, Link } = Typography;
const LinkToShop = ({avaSrc, shopName, href}) => (
    <Row gutter={[16, 16]} align="bottom">
        <Col span={2}>
            <Avatar src={avaSrc} />
        </Col>
        <Col>
            <Text>
                В магазин <Link href={href}>{shopName}</Link>
            </Text>
        </Col>
    </Row>
);

export default LinkToShop;