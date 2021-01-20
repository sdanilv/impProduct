import React from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";
import ButtonPanel from "../Tools/ButtonPanel";

const Card = ({ product,  ...buttonPanel }) => {
  const { name, price, img, id } = product;

  return (
    <div className={classes.card}>
      <Link to={`/product/${id}`}>
        <img
          className={classes.cardImage}
          alt="cardImage"
          src={img[0]}
        />
      </Link>
      <div className={classes.flex}>
        <div className={classes.cardNameContainer}>
          <div className={classes.cardName}>{name}</div>
          <div className={classes.cardPrice}> {price} грн</div>
        </div>
        <ButtonPanel {...{ ...buttonPanel, product }} />
      </div>
    </div>
  );
};
export default Card;
