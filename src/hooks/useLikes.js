import { useState } from "react";
import { productsList } from "../Utilits/productsList";
import { useEffect } from "react";

export const useLikes = () => {
  let savedLikes = localStorage.getItem("likes");
  savedLikes = savedLikes ? savedLikes.split(";").map((i) => +i) : [];
  const [likedProducts, setLikedProducts] = useState([...savedLikes]);

  useEffect(() => localStorage.setItem("likes", likedProducts.join(";")), [
    likedProducts,
  ]);

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
