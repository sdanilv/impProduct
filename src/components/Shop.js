import React, { useState } from "react";
import Cards from "./Cards/Cards";
import { productsList } from "../Utilits/productsList";
import Product from "./Product/Product";
import classes from "./Shop.module.css";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import SearchInput from "./Tools/SearchInput";
import Profile from "./Profile";
import CartPopup from "./Cart/CartPopup";
import { useLikes } from "../hooks/useLikes";
import { useCards } from "../hooks/useCards";
import Cart from "./Cart/Cart";
import LinkToShop from "./Product/LinkToShop";
import { useCart } from "../hooks/useCart";

const Shop = () => {
  const { likedCards, countLike, ...likes } = useLikes();
  const { seeLikedCards, seeAllCards, seeSearchedCards, cards } = useCards(
    likedCards
  );
  const { addToCart, isCartEmpty, cartCount,  ...cart } = useCart();
  const isMobile = window.screen.width < 900;
  const MenuWithData = () => (
    <Menu {...{ seeLikedCards, seeAllCards, countLike, cartCount }} />
  );

  return (
    <BrowserRouter>
      <div className={`${classes.shop}  `}>
        {!isMobile && <MenuWithData />}
        <Route
          path="/search"
          render={() => <SearchInput onChange={seeSearchedCards} />}
        />
        <Route path="/cart" render={() => <Cart {...{ cart }} />} />
        <Route path="/profile" render={() => <Profile />} />
        <Route
          path="/product/:id"
          render={() => <Product {...{ ...likes, addToCart }} />}
        />
        <Cards {...{ ...likes, seeAllCards, addToCart, cards }} />
        {!isCartEmpty && <CartPopup />}
        {isMobile && <MenuWithData />}
      </div>
    </BrowserRouter>
  );
};

export default Shop;
