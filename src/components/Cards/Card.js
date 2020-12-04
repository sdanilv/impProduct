import React from "react";
import classes from "./Card.module.css";

const Card = ({ name, price, img, setProduct }) => (
  <div
    className={classes.card}
    onClick={() => {
      setProduct();
    }}
  >
    <img className={classes.cardImage} alt="cardImage" src={img[0]} />
    <div className={classes.cardNameContainer}>
      <div className={classes.cardName}>{name}</div>
      <div className={classes.cardPrice}> {price} грн.</div>
    </div>
  </div>
);
export default Card;
