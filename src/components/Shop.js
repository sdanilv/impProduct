import React from "react";
import Cards from "./Cards/Cards";
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
import { useCart } from "../hooks/useCart";
import { useMemo } from "react";

const Shop = ({productsList}) => {

  const { likedCards, countLike, ...likes } = useLikes(productsList);
  const { seeLikedCards, seeAllCards, seeSearchedCards, cards } = useCards(
    likedCards,
    productsList
  );
  const {
    addToCart,
    cartCount,
    cartPopup,
    getCartProductCount,
    removePopup,
    ...cart
  } = useCart(productsList);
  const isMobile = window.screen.availWidth < 600;
  const MenuWithData = () =>
    useMemo(
      () => <Menu {...{ seeLikedCards, seeAllCards, countLike, cartCount, removePopup }} />,
      []
    );

  return (
    <BrowserRouter>
      <div className={`${classes.shop}  `}>
        {!isMobile && <MenuWithData />}
        <Route path="/search">
          <SearchInput onChange={seeSearchedCards} />
        </Route>
        <Route path="/cart">
          <Cart {...{ cart }} />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/product/:id">
          <Product
            {...{ ...likes, addToCart, getCartProductCount, productsList }}
          />
        </Route>
        <Cards
          {...{ ...likes, seeAllCards, addToCart, cards, getCartProductCount }}
        />

        <CartPopup cartPopup={cartPopup} />
        {isMobile && <MenuWithData />}
      </div>
    </BrowserRouter>
  );
};

export default Shop;
