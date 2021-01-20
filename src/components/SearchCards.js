import React, {useState} from 'react';
import SearchInput from "./Tools/SearchInput";


const SearchCards = ({CardsShell, productsList}) => {
    const [cards, setCards] = useState(productsList);
    const seeSearchedCards = ({ target }) => {
        setCards(
            productsList.filter(({ name }) => ~name.search(RegExp(target.value, "i")))
        );
    };
    return (
        <>
            <SearchInput onChange={seeSearchedCards} />
            <CardsShell cards={cards} />
        </>
    );
};

export default SearchCards;