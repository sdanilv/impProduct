import React, { useEffect, useState } from "react";
import { getAllProducts } from "./api";
import Shop from "./components/Shop";

const App = () => {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    (async () => {
      const fetchedProducts = await getAllProducts();
      setProductsList(fetchedProducts);
    })();
  }, []);
  if (productsList.length) return <Shop productsList={productsList} />;
  return <></>;
};

export default App;
