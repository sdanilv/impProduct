import { getAllProducts } from "../api";
import { atom, selector, useSetRecoilState } from "recoil";
import { useEffect } from "react";

export const productsAtom = atom({
  key: "Products",
  default: [],
});

export const filterAtom = atom({
  key: "Filter",
  default: "",
});

export const useFetchProduct = () => {
  const setProductsList = useSetRecoilState(productsAtom);

  useEffect(() => {
    (async () => {
      const fetchedProducts = await getAllProducts();
      setProductsList(fetchedProducts);
    })();
  }, [setProductsList]);
};

export const filteredProductsSelector = selector({
  key: "filteredProducts",
  get: ({ get }) => {
    const filter = get(filterAtom);
    const allProducts = get(productsAtom);
    return allProducts.filter(({ name }) => ~name.search(RegExp(filter, "i")));
  },
});
