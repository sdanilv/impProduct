import React, { useReducer } from "react";
import classes from "./Cart.module.css";
import CartProduct from "./CartProduct";
import LinkToShop from "../Product/LinkToShop";

const a = {
  products: [
    { id: 1, price: 10, count: 2, name: "Work Wins Over Smarts Quote T Shirt" },
  ],
  sum: 20,
};
const Cart = ({  cart }) => {
  const { sum, products, ...cartEvent } = cart;
  if (!products) return <></>;
  const productsMap = products.map((product) => (
    <CartProduct {...product} {...cartEvent} />
  ));
  return (
    <div className={classes.cart}>
      <div className={classes.cartLink}> <LinkToShop/> </div>
      <div className={classes.productsTable}>{productsMap}</div>
      <div className={classes.totalCount}>
        <div>Всего:</div>
        <div>{sum}грн</div>
      </div>
      <div className={classes.buyButton}> Купить</div>
    </div>
  );
};

export default Cart;
