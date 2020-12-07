import React, { useState } from "react";
import BottomMenu from "./components/BottomMenu";
import Cards from "./components/Cards/Cards";
import { productsList } from "./components/Tools/productsList";
import Product from "./components/Product";

const Shop = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [product, setProduct] = useState(null);
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
  const seeLikedCards = () => {
    setCards(likedCards);
    setProduct(null);
  };
  const seeAllCards = () => {
    setCards(productsList);
    setProduct(null);
  };
  return (
    <>
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
        products={cards}
        likedProducts={likedProducts}
        addLike={addLike}
        setProduct={setProduct}
        removeLike={removeLike}
        count={4}
      />
      <BottomMenu
        seeLikedCards={seeLikedCards}
        seeAllCards={seeAllCards}
        countLike={likedProducts.length}
      />
    </>
  );
};

export default Shop;
