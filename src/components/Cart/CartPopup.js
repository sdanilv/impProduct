import React from "react";
import classes from "./CartPopup.module.css";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { cartAtoms } from "../../atoms/CartAtoms";

const CartPopup = () => {
  const { popup: cartPopup } = useRecoilValue(cartAtoms);
  return (
    <div
      className={`${classes.cartPanel}  
       ${!cartPopup.isEnable && classes.destroy}
        `}
    >
      <div className={classes.firstSub}>
        <img
          className={classes.cartPanelImg}
          alt="Added to cart"
          src={cartPopup.img[0]}
        />
        <div> {cartPopup.name} добавлен в корзину</div>
      </div>
      <Link className={classes.cartPanelLink} to={"/cart"}>
        Просмотреть
      </Link>
    </div>
  );
};

export default CartPopup;
