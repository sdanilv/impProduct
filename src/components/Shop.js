import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import Profile from "./Profile";
import Cards from "./Cards/Cards";
import Product from "./Product/Product";
import Cart from "./Cart/Cart";
import SearchCards from "./SearchCards";
import CartPopup from "./Cart/CartPopup";
import { useLikes } from "../hooks/useLikes";
import { useCart } from "../hooks/useCart";
import {useDarkTheme} from "../hooks/useDarkTheme";
import classes from "./Shop.module.css";

const Shop = ({ productsList }) => {
  const { likedCards, countLike, ...likes } = useLikes(productsList);
  const darkTheme = useDarkTheme()
  const {
    addToCart,
    cartCount,
    cartPopup,
    getCartProductCount,
    removePopup,
    ...cart
  } = useCart(productsList);

  const CardsShell = ({ cards }) => (
    <Cards
      {...{
        ...likes,
        addToCart,
        cards,
        getCartProductCount,
      }}
    />
  );

  return (
    <BrowserRouter>
      <div className={classes.shop}>
        <Menu {...{ countLike, cartCount, removePopup }} />
        <div className={classes.container}>
          <Route exact path={["/"]}>
            <CardsShell cards={productsList} />
          </Route>
          <Route path="/product/:id">
            <Product
              {...{
                ...likes,
                addToCart,
                getCartProductCount,
                CardsShell,
                productsList,
              }}
            />
          </Route>
          <Route path="/search">
            <SearchCards CardsShell={CardsShell} productsList={productsList} />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} />
          </Route>
          <Route exact path={["/like"]}>
            <CardsShell cards={likedCards} />
          </Route>
          <Route path="/profile">
            <Profile {...darkTheme} />
          </Route>
          <CartPopup cartPopup={cartPopup} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Shop;
