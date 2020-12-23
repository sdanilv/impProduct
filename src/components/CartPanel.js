import React from "react";
import classes from "./CartPanel.module.css";

const CartPanel = () => (
  <div className={classes.cartPanel}>
    <div className={classes.firstSub}>
      <img
        className={classes.cartPanelImg}
        src="https://mcusercontent.com/ece05dfe187189e74ea128620/images/bcdc32ce-5eae-4db9-9d40-ce08395bb0c4.jpg"
      />
      <div> Добавлено в корзину </div>
    </div>
    <div> Просмотреть</div>
  </div>
);

export default CartPanel;
