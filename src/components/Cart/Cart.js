import React from "react";
import classes from "./Cart.module.css";
import CartProduct from "./CartProduct";
import LinkToShop from "../Product/LinkToShop";
import { pay } from "../../Utilits/WayForPay";

const Cart = ({ cart }) => {
  const { sum, products, ...cartEvent } = cart;
  if (!products) return <></>;
  const productName = [];
  const productPrice = [];
  const productCount = [];
  const productsId = [];
  const productsMap = products.map((product) => {
    productName.push(product.name);
    productPrice.push(product.price);
    productCount.push(product.count);
    productsId.push(product.id);
    return <CartProduct key={product.id} {...product} {...cartEvent} />;
  });

  const buyButtonHandler = () => {
    pay(productName, productPrice, productCount, productsId, sum);
  };

  return (
    <div className={classes.cart}>
      <div className={classes.cartLink}>
        <LinkToShop />
      </div>
      <div className={classes.productsTable}>{productsMap}</div>
      <div className={classes.totalCount}>
        <div>Всего:</div>
        <div>{sum}грн</div>
      </div>
      <div
        onClick={buyButtonHandler}
        className={`${classes.buyButton} ${!sum && classes.notActive}`}
      >
        Купить
      </div>
    </div>
  );
};

export default Cart;
