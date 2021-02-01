import React from "react";
import SearchInput from "./Tools/SearchInput";
import Cards from "./Cards/Cards";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filterAtom, filteredProductsSelector } from "../atoms/ProductsAtom";

const SearchCards = () => {
  const filteredProducts = useRecoilValue(filteredProductsSelector);
  const setFilter = useSetRecoilState(filterAtom);
  const seeSearchedCards = ({ target }) => setFilter(target.value);
  return (
    <>
      <SearchInput onChange={seeSearchedCards} />
      <Cards cards={filteredProducts} />
    </>
  );
};

export default SearchCards;
