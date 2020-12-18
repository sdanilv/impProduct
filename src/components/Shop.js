import React, { useState } from "react";
import Cards from "./Cards/Cards";
import { productsList } from "../Utilits/productsList";
import Product from "./Product/Product";
import classes from "./Shop.module.css";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import SearchInput from "./Tools/SearchInput";
import Profile from "./Profile";

const Shop = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [cards, setCards] = useState(productsList);
  const addLike = (id) => setLikedProducts([...likedProducts, id]);
  const removeLike = (id) => {
    const filteredProducts = likedProducts.filter(
      (likedProduct) => likedProduct !== id
    );
    setLikedProducts(filteredProducts);
  };
  const likedCards = productsList.filter(({ id }) =>
    likedProducts.includes(id)
  );
  const seeLikedCards = () => setCards(likedCards);
  const seeAllCards = () => setCards(productsList);

  const changeSearchHandler = ({ target }) => {
    setCards(
      productsList.filter(({ name }) => ~name.search(RegExp(target.value, "i")))
    );
  };
  const returnToHomeTab = () => {
    setCards(productsList);
  };
  const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|BB10|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  const MenuWithData = () => (
    <Menu
      {...{  seeLikedCards, seeAllCards }}
      countLike={likedProducts.length}
    />
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
              onChange={changeSearchHandler}
            />
          )}
        />

        <Route
            path="/profile"
            render={() => <Profile />}
        />
        <Route/>
        <Route
          path="/product/:id"
          render={() => <Product {...{ likedProducts, addLike, removeLike }} />}
        />
        <Route/>

        <Cards
          {...{
            returnToHomeTab,
            likedProducts,
            addLike,
            removeLike,
          }}
          products={cards}
          count={4}
        />
        {isMobile && <MenuWithData />}
      </div>
    </BrowserRouter>
  );
};

export default Shop;
