import React, { useState } from "react";
import BottomMenu from "./components/BottomMenu";
import Cards from "./components/Cards/Cards";
import { productsList } from "./components/Tools/productsList";
import Product from "./components/Product";
import classes from "./Shop.module.css";
import { Input } from "antd";
import DesktopMenu from "./components/DesktopMenu";

const Shop = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [cards, setCards] = useState(productsList);
  const addLike = (id) => setLikedProducts([...likedProducts, id]);
  const [isSearch, setIsSearch] = useState(false);
  const [tab, selectTab] = useState(1);

  const removeLike = (id) => {
    const filteredProducts = likedProducts.filter(
      (likedProduct) => likedProduct !== id
    );
    setLikedProducts(filteredProducts);
  };
  const likedCards = productsList.filter(({ id }) =>
    likedProducts.includes(id)
  );
  const seeLikedCards = () => {
    setCards(likedCards);
    setProduct(null);
    setIsSearch(false);
  };
  const seeAllCards = () => {
    setCards(productsList);
    setProduct(null);
    setIsSearch(false);
  };
  const seeSearchedCards = () => {
    setCards(productsList);
    setProduct(null);
    setIsSearch(true);
  };
  const changeSearchHandler = ({ target }) => {
    setCards(
      productsList.filter(({ name }) => ~name.search(RegExp(target.value, "i")))
    );
  };
  const returnToHomeTab = () => {
    setIsSearch(false);
    setCards(productsList);
    selectTab(1);
  };
  const  isMobile = /Android|webOS|iPhone|iPod|BlackBerry|BB10|IEMobile|Opera Mini/i.test(
      navigator.userAgent
  );


  return (
    <div className={classes.shop}>
      {!isMobile&&<DesktopMenu
          tab={tab}
          selectTab={selectTab}
          seeSearchedCards={seeSearchedCards}
          seeLikedCards={seeLikedCards}
          seeAllCards={seeAllCards}
          countLike={likedProducts.length}
      />}
      {isSearch && (
        <div className={classes.search}>
          <Input.Search
            size={"large"}
            bordered={false}
            placeholder="Введите запрос"
            onChange={changeSearchHandler}
          />
        </div>
      )}
      {product && (
        <Product
          likedProducts={likedProducts}
          product={product}
          addLike={addLike}
          removeLike={removeLike}
          seeAllCards={seeAllCards}
        />
      )}
      <Cards
        isSearch={isSearch}
        returnToHomeTab={returnToHomeTab}
        products={cards}
        likedProducts={likedProducts}
        addLike={addLike}
        setProduct={setProduct}
        removeLike={removeLike}
        count={4}
      />
      {isMobile&&<BottomMenu
        tab={tab}
        selectTab={selectTab}
        seeSearchedCards={seeSearchedCards}
        seeLikedCards={seeLikedCards}
        seeAllCards={seeAllCards}
        countLike={likedProducts.length}
      />}
    </div>
  );
};

export default Shop;
