import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import {
  AddIcon,
  CartIcon,
  CartIconFull,
  HomeIcon,
  HomeIconFull,
  LikeIcon,
  LikeIconFull,
  SearchIcon,
  SearchIconFull,
} from "./Tools/Icons";
import classes from "./Menu.module.css";
import { useRecoilValue } from "recoil";
import { countLikeSelector } from "../atoms/LikesAtoms";
import { cartAtoms, useRemovePopup } from "../atoms/CartAtoms";

const Menu = () => {
  const countLike = useRecoilValue(countLikeSelector);
  const { count: cartCount } = useRecoilValue(cartAtoms);
  const removePopup = useRemovePopup();

  const isAddedToCart = useRef(false);
  const { pathname } = useLocation();
  const [, setState] = useState(null);
  useEffect(() => {
    if (cartCount) {
      isAddedToCart.current = true;
      setState(true);
    }
  }, [cartCount]);
  return (
    <div
      onClick={() => {
        removePopup();
        window.scrollTo(0, 0);
      }}
      className={classes.menu}
    >
      <a className={classes.skipLink} href={"#start-of-content"}>
        Перейти к основному контенту
      </a>
      <Link to="/">{pathname === "/" ? <HomeIconFull /> : <HomeIcon />}</Link>
      <Link to="/search">
        {pathname === "/search" ? <SearchIconFull /> : <SearchIcon />}
      </Link>
      {isAddedToCart.current ? (
        <Link to="/cart">
          <div badge={cartCount}>
            {pathname === "/cart" ? <CartIconFull /> : <CartIcon />}
          </div>
        </Link>
      ) : (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdn2MwSLuLq3URztfZMojmlcG0fOigl_OebfWoOAbk5K32IPw/viewform?usp=sf_link"
        >
          <AddIcon />
        </a>
      )}
      <Link to="/like">
        <div badge={countLike}>
          {pathname === "/like" ? <LikeIconFull /> : <LikeIcon />}
        </div>
      </Link>
      <Link to="/profile">
        <div
          className={
            pathname === "/profile"
              ? classes.menuAvaBorder
              : classes.menuAvaWithoutBorder
          }
        >
          <img
            className={classes.menuAva}
            src="https://mcusercontent.com/ece05dfe187189e74ea128620/images/bcdc32ce-5eae-4db9-9d40-ce08395bb0c4.jpg"
            alt="menuAva"
          />
        </div>
      </Link>
    </div>
  );
};

export default Menu;
