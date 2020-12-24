import React, { useRef, useState, useEffect } from "react";
import classes from "./CartPopup.module.css";
import { Link, useLocation } from "react-router-dom";

const CartPopup = () => {
  const { pathname } = useLocation();
  const [destroy, setDestroy] = useState(false);

  if (pathname === "/cart") return <></>;
  return (
    <div
      onClick={() => {
        console.log("Hello");
        setDestroy(true);
      }}
      className={`${classes.cartPanel}  ${destroy && classes.destroy}`}
    >
      <div className={classes.firstSub}>
        <img
          className={classes.cartPanelImg}
          src="https://mcusercontent.com/ece05dfe187189e74ea128620/images/bcdc32ce-5eae-4db9-9d40-ce08395bb0c4.jpg"
        />
        <div> Добавлено в корзину</div>
      </div>
      <Link className={classes.cartPanelLink} to={"/cart"}>
        Просмотреть
      </Link>
    </div>
  );
};

export default CartPopup;
