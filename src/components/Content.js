import React from "react";
import classes from "../Product.module.css";
import {
  HeartFilled,
  HeartOutlined,
  SendOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button, Typography } from "antd";
import { useState } from "react";
const { Text } = Typography;
const Content = ({ name, price, oldPrice, addLike, addCart, removeLike }) => {
  const [like, setLike] = useState(false);
  const heartHandler = () => {
    setLike(!like);
    if (like) removeLike();
    else addLike();
  };
  return (
    <div className={classes.panel}>
      <div>
        <Text bold strong>
          {name}
        </Text>
        <div className={classes.price}>
          <Text type="danger">{price}&nbsp;UAH</Text>
          <Text className={classes.throughText}>{oldPrice}&nbsp;UAH</Text>
        </div>
      </div>
      <div className={classes.panelButtonContainer}>
        <div className={classes.panelIconContainer}>
          <SendOutlined className={classes.bigIcon} />
          {like ? (
            <HeartFilled
              onClick={heartHandler}
              className={classes.bigIcon}
              style={{ color: "red" }}
            />
          ) : (
            <HeartOutlined onClick={heartHandler} className={classes.bigIcon} />
          )}
        </div>
        <div className={classes.cartButtonContainer}>
          <Button className={classes.cartButton} block onClick={()=>addCart()} >
            <div className={classes.plusOne}> +1 в</div> <ShoppingCartOutlined className={classes.bigIcon} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Content;
