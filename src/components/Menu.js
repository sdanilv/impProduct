import React from "react";
import classes from "./Menu.module.css";
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
import { Link, useLocation } from "react-router-dom";

const Menu = ({ countLike, seeLikedCards, seeAllCards, cartCount }) => {
  const { pathname } = useLocation();
  return (
    <div className={classes.menu}>
      <Link to="/home">
        {pathname === "/home" || pathname === "/" ? (
          <HomeIconFull />
        ) : (
          <HomeIcon
            onClick={() => {
              seeAllCards();
            }}
          />
        )}
      </Link>
      <Link to="/search">
        {pathname === "/search" ? (
          <SearchIconFull />
        ) : (
          <SearchIcon
            onClick={() => {
              window.scrollTo(0, 0);
              seeAllCards();
            }}
          />
        )}
      </Link>
      {/*<a*/}
      {/*  target="_blank"*/}
      {/*  rel="noopener noreferrer"*/}
      {/*  href="https://docs.google.com/forms/d/e/1FAIpQLSdn2MwSLuLq3URztfZMojmlcG0fOigl_OebfWoOAbk5K32IPw/viewform?usp=sf_link"*/}
      {/*>*/}
      {/*  <AddIcon />*/}
      {/*</a>*/}
      <Link to="/cart">
        <div badge={cartCount}>
          {pathname === "/cart" ? <CartIconFull /> : <CartIcon />}
        </div>
      </Link>
      <Link to="/like">
        <div badge={countLike}>
          {pathname === "/like" ? (
            <LikeIconFull />
          ) : (
            <LikeIcon
              onClick={() => {
                seeLikedCards();
              }}
            />
          )}
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
