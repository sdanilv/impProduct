import { useState } from "react";
import { productsList } from "../Utilits/productsList";
import { useEffect } from "react";
export const useCards = (likedCards) => {

  const [cards, setCards] = useState(productsList);
  const seeLikedCards = () => setCards(likedCards);
  const seeAllCards = () => setCards(productsList);
  useEffect(() => {
    if (window.location.pathname === "/like") seeLikedCards();
  }, []);
  const seeSearchedCards = ({ target }) => {
    setCards(
      productsList.filter(({ name }) => ~name.search(RegExp(target.value, "i")))
    );
  };

  return { seeLikedCards, seeAllCards, seeSearchedCards, cards };
};
