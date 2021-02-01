import React from "react";
import classes from "./CartProduct.module.css";
import {Link} from "react-router-dom";
import {CrossImage} from "../Tools/Icons";
import {useCartReducer} from "../../atoms/CartAtoms";

const CartProduct = ({ id, img, name, price, count, }) => {

    const {plusCount ,minusCount, removeProduct }= useCartReducer(id);

  return (
    <div className={classes.product}>
        <Link to={`product/${id}`} ><img alt="product in cart" src={img[0]} className={classes.productImg} /></Link>
      <div className={classes.productPanel}>
        <div className={classes.productName}>{name}</div>
        <div className={classes.productPrice}> {price} грн </div>
        <div className={classes.productCount}>
          <button
            onClick={minusCount}
            className={`${classes.countButton} `}
          >
            <div  className={classes.minus}>-</div>
          </button>
          <div className={`${classes.countNumber}`}>{count}</div>
          <button onClick={plusCount} className={`${classes.countButton}`}>+</button>
        </div>
      </div>
      <div onClick={removeProduct} className={classes.closePanelButton}><CrossImage /></div>
    </div>
  );
};

export default CartProduct;
