import React from "react";
import Shop from "./components/Shop";
import Loader from "./components/Tools/Loader";
import { productsAtom, useFetchProduct } from "./atoms/ProductsAtom";
import { useRecoilValue } from "recoil";

const App = () => {
  useFetchProduct();
  const productsList = useRecoilValue(productsAtom);
  if (productsList.length) return <Shop />;
  return <Loader />;
};

export default App;
