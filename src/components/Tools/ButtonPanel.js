import React from "react";
import classes from "../Product/Panel.module.css";
import { CartIcon, CartIconFull, LikeIcon, LikeIconFull } from "./Icons";

const ButtonPanel = ({
  addToCart,
  removeLike,
  addLike,
  isLiked,
  product,
  getCartProductCount,
}) => {
  const { id } = product;
  const cartCount = getCartProductCount(id);

  return (
    <div className={classes.panelButtonContainer}>
      <div className={classes.cart}>
        {cartCount ? (
          <div badge={cartCount}>
            <CartIconFull onClick={() => addToCart(product)} />
          </div>
        ) : (
          <CartIcon onClick={() => addToCart(product)} />
        )}
      </div>
      {isLiked(id) ? (
        <LikeIconFull onClick={() => removeLike(id)} />
      ) : (
        <LikeIcon onClick={() => addLike(id)} />
      )}
    </div>
  );
};

export default ButtonPanel;
