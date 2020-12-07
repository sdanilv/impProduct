import React from "react";
import classes from "./Card.module.css";
import { LikeIcon, LikeIconFull } from "../Tools/Icons";

const Card = ({ product, setProduct, removeLike, addLike, likedProducts }) => {
  const { name, price, img, id } = product;
  const liked = likedProducts.includes(id);
  return (
    <div className={classes.card}>
      <img
        className={classes.cardImage}
        onClick={() => setProduct(product)}
        alt="cardImage"
        src={img[0]}
      />
      <div className={classes.flex}>
        <div className={classes.cardNameContainer}>
          <div className={classes.cardName}>{name}</div>
          <div className={classes.cardPrice}> {price} грн.</div>
        </div>
        <div className={classes.cardLike}>
          {liked ? (
            <LikeIconFull onClick={() => removeLike(id)} />
          ) : (
            <LikeIcon onClick={() => addLike(id)} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
