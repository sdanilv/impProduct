import React from "react";
import Cards from "./Cards";
import { useRecoilValue } from "recoil";
import { productsAtom } from "../../atoms/ProductsAtom";

const AllCards = () => {
  const allProducts = useRecoilValue(productsAtom);
  return <Cards cards={allProducts} />;
};

export default AllCards;
