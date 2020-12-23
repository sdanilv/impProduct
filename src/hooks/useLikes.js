import { useState } from "react";
import { productsList } from "../Utilits/productsList";

export const useLikes = () => {
  const [likedProducts, setLikedProducts] = useState([]);
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

  const isLiked = (id) => likedProducts.includes(id);

  const countLike = likedProducts.length;

  return { addLike, removeLike, likedCards, isLiked, countLike };
};
