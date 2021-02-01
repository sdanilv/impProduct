import React from "react";
import classes from "../Product/Panel.module.css";
import { CartIcon, CartIconFull, LikeIcon, LikeIconFull } from "./Icons";
import { useRecoilValue } from "recoil";
import { isLikedSelector, useLikesReducers } from "../../atoms/LikesAtoms";
import { getCartProductCount, useAddProduct } from "../../atoms/CartAtoms";

const ButtonPanel = ({ product }) => {
  const { id } = product;

  const isLiked = useRecoilValue(isLikedSelector(id));
  const cartCount = useRecoilValue(getCartProductCount(id));
  const { removeLike, addLike } = useLikesReducers(id);
  const addToCart = useAddProduct(product);
  return (
    <div className={classes.panelButtonContainer}>
      <div className={classes.cart}>
        {cartCount ? (
          <div badge={cartCount}>
            <CartIconFull onClick={() => addToCart()} />
          </div>
        ) : (
          <CartIcon onClick={() => addToCart()} />
        )}
      </div>
      <div>
        {isLiked ? (
          <LikeIconFull onClick={removeLike} />
        ) : (
          <LikeIcon onClick={addLike} />
        )}
      </div>
    </div>
  );
};

export default ButtonPanel;
