import React from "react";
import { useMemo } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import Profile from "./Profile";
import Cards from "./Cards/Cards";
import Product from "./Product/Product";
import Cart from "./Cart/Cart";
import CartPopup from "./Cart/CartPopup";
import SearchInput from "./Tools/SearchInput";
import { useLikes } from "../hooks/useLikes";
import { useCards } from "../hooks/useCards";
import { useCart } from "../hooks/useCart";
import classes from "./Shop.module.css";

const Shop = ({ productsList }) => {
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
  const MenuWithData = () =>
    useMemo(
      () => (
        <Menu
          {...{ seeLikedCards, seeAllCards, countLike, cartCount, removePopup }}
        />
      ),
      []
    );

  return (
    <BrowserRouter>
      <div className={classes.shop}>
        <MenuWithData />
        <div className={classes.container}>
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
          <Route exact path={["/", "/like", "/search", "/product/:id"]}>
            <Cards
              {...{
                ...likes,
                seeAllCards,
                addToCart,
                cards,
                getCartProductCount,
              }}
            />
          </Route>
          <CartPopup cartPopup={cartPopup} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Shop;
