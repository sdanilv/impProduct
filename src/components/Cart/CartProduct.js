import React from "react";
import classes from "./CartProduct.module.css";
import {Link} from "react-router-dom";

const CartProduct = ({ id, img, name, price, count, plusProductCount ,minusProductCount, removeProduct }) => {
    const plusHandler = () => plusProductCount(id);
    const minusHandler = () => minusProductCount(id);
    const crossHandler = () => removeProduct(id);
  return (
    <div className={classes.product}>
        <Link to={`product/${id}`} ><img alt="product in cart" src={img[0]} className={classes.productImg} /></Link>
      <div className={classes.productPanel}>
        <div className={classes.productName}>{name}</div>
        <div className={classes.productPrice}> {price} грн </div>
        <div className={classes.productCount}>
          <button
            onClick={minusHandler}
            className={`${classes.countButton} `}
          >
            <div  className={classes.minus}>-</div>
          </button>
          <div className={`${classes.countNumber}`}>{count}</div>
          <button onClick={plusHandler} className={`${classes.countButton}`}>+</button>
        </div>
      </div>
      <div onClick={crossHandler} className={classes.closePanelButton}>x</div>
    </div>
  );
};

export default CartProduct;
