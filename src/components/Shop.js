import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import Profile from "./Profile";
import Cards from "./Cards/Cards";
import Product from "./Product/Product";
import Cart from "./Cart/Cart";
import SearchCards from "./SearchCards";
import CartPopup from "./Cart/CartPopup";
import { useDarkTheme } from "../hooks/useDarkTheme";
import classes from "./Shop.module.css";
import { countLikeSelector, likedCardsSelector } from "../atoms/LikesAtoms";
import { useRecoilValue } from "recoil";
import { useSavedCart } from "../atoms/CartAtoms";
import AllCards from "./Cards/AllCards";

const Shop = () => {
  useSavedCart();
  const likedCards = useRecoilValue(likedCardsSelector);
  const countLike = useRecoilValue(countLikeSelector);
  const darkTheme = useDarkTheme();

  return (
    <BrowserRouter>
      <div className={classes.shop}>
        <Menu {...{ countLike }} />
        <div className={classes.container}>
          <Route exact path={["/"]}>
            <AllCards />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/search">
            <SearchCards />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route exact path={["/like"]}>
            <Cards cards={likedCards} />
          </Route>
          <Route path="/profile">
            <Profile {...darkTheme} />
          </Route>
          <CartPopup />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Shop;
