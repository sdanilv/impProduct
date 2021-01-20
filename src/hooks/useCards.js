import { useState } from "react";
export const useCards = (likedCards, productsList) => {
  const [cards, setCards] = useState(productsList);


  const seeAllCards = () => setCards(productsList);

  const seeSearchedCards = ({ target }) => {
    setCards(
      productsList.filter(({ name }) => ~name.search(RegExp(target.value, "i")))
    );
  };

  return {  seeAllCards, seeSearchedCards, cards };
};
