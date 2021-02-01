import { useEffect } from "react";
import { atom, selector, selectorFamily, useRecoilState } from "recoil";
import { productsAtom } from "./ProductsAtom";

let savedLikes = localStorage.getItem("likes");
savedLikes = savedLikes ? savedLikes.split(";") : [];

export const likesAtom = atom({
  key: "Likes",
  default: [...savedLikes],
});

export const likedCardsSelector = selector({
  key: "likedCards",
  get: ({ get }) => {
    const likedProducts = get(likesAtom);
    const productsList = get(productsAtom);
    return productsList.filter(({ id }) => likedProducts.includes(id));
  },
});
export const isLikedSelector = selectorFamily({
  key: "isLiked",
  get: (id) => ({ get }) => {
    const likedProducts = get(likesAtom);
    return likedProducts.includes(id);
  },
});
export const countLikeSelector = selector({
  key: "countLike",
  get: ({ get }) => {
    const likedProducts = get(likesAtom);

    return likedProducts.length;
  },
});

export const useLikesReducers = (id) => {
  const [likes, setLikes] = useRecoilState(likesAtom);

  useEffect(() => localStorage.setItem("likes", likes.join(";")), [likes]);
  const removeLike = () =>
    setLikes((likedProducts) =>
      likedProducts.filter((likedProduct) => likedProduct !== id)
    );

  const addLike = () => setLikes((prev) => [...prev, id]);
  return { removeLike, addLike };
};
