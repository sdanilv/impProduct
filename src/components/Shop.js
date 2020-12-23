import React, { useState } from "react";
import Cards from "./Cards/Cards";
import { productsList } from "../Utilits/productsList";
import Product from "./Product/Product";
import classes from "./Shop.module.css";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import SearchInput from "./Tools/SearchInput";
import Profile from "./Profile";
import CartPanel from "./CartPanel";
import { useLikes } from "../hooks/useLikes";
import {useCards} from "../hooks/useCards";

const Shop = () => {
  const { addLike, removeLike, likedCards, isLiked, countLike } = useLikes();
  const {seeLikedCards, seeAllCards, seeSearchedCards, cards} = useCards(likedCards);
  const isMobile = window.screen.width < 900;
  const MenuWithData = () => (
    <Menu {...{ seeLikedCards, seeAllCards, countLike }} />
  );

  return (
    <BrowserRouter>
      <div className={`${classes.shop}  `}>
        {!isMobile && <MenuWithData />}
        <Route
          path="/search"
          render={() => (
            <SearchInput
              placeholder="Введите запрос"
              onChange={seeSearchedCards}
            />
          )}
        />

        <Route path="/profile" render={() => <Profile />} />
        <Route
          path="/product/:id"
          render={() => <Product {...{ isLiked, addLike, removeLike }} />}
        />
        <Cards
          {...{
            seeAllCards,
            isLiked,
            addLike,
            removeLike,
          }}
          products={cards}
          count={4}
        />
        <CartPanel />
        {isMobile && <MenuWithData />}
      </div>
    </BrowserRouter>
  );
};

export default Shop;
