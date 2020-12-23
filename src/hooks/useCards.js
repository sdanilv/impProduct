import {useState} from "react";
import {productsList} from "../Utilits/productsList";

export const useCards = (likedCards) =>{

    const [cards, setCards] = useState(productsList);
    const seeLikedCards = () => setCards(likedCards);
    const seeAllCards = () => setCards(productsList);

    const seeSearchedCards = ({ target }) => {
        setCards(
            productsList.filter(({ name }) => ~name.search(RegExp(target.value, "i")))
        );
    };

    return {seeLikedCards, seeAllCards, seeSearchedCards, cards}
};