import React from "react";
import classes from "./Card.module.css";
import { LikeIcon, LikeIconFull } from "../Tools/Icons";
import {Link} from "react-router-dom";

const Card = ({
  product,

  removeLike,
  addLike,
  likedProducts,
  returnToHomeTab,
}) => {
  const { name, price, img, id } = product;
  const liked = likedProducts.includes(id);
  return (
    <div className={classes.card}>
        <Link to={`/product/${id}`}>
      <img
        className={classes.cardImage}
        onClick={() => {
          returnToHomeTab();

          window.scrollTo(0, 0);
        }}
        alt="cardImage"
        src={img[0]}
      /></Link>
      <div className={classes.flex}>
        <div className={classes.cardNameContainer}>
          <div className={classes.cardName}>{name}</div>
          <div className={classes.cardPrice}> {price} грн</div>
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
