import { useEffect } from "react";
import {
  atom,
  selectorFamily,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { productsAtom } from "./ProductsAtom";

export const cartAtoms = atom({
  key: "cartAtoms",
  default: {
    products: [],
    sum: 0,
    count: 0,
    popup: { isEnable: false, name: "", img: "", timerId: 0 },
  },
});
export const useSavedCart = () => {
  const productsList = useRecoilValue(productsAtom);
  const [{ products }, setCart] = useRecoilState(cartAtoms);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      const products = [];
      let sum = 0;
      let count = 0;

      for (const saveProduct of savedCart.products) {
        const product = productsList.find(({ id }) => id === saveProduct.id);
        products.push({ ...product, count: saveProduct.count });
        sum += +saveProduct.count * +product.price;
        count += +saveProduct.count;
      }
      setCart((initCart) => ({ ...initCart, products, count, sum }));
    }
  }, [productsList,setCart]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify({ products }));
  }, [products]);
};

export const useCartReducer = (id) => {
  const setCart = useSetRecoilState(cartAtoms);
  const plusCount = () =>
    setCart((state) => {
      let price = 0;
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === id) {
            price = product.price;
            return { ...product, count: product.count + 1 };
          }
          return product;
        }),
        sum: +state.sum + Number.parseFloat(price),
        count: state.count + 1,
      };
    });
  const minusCount = () =>
    setCart((state) => {
      let price = 0;
      let count = 0;
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === id && product.count !== 1) {
            price = product.price;
            count = 1;
            return { ...product, count: product.count - 1 };
          }
          return product;
        }),
        sum: +state.sum - price,
        count: state.count - count,
      };
    });

  const removeProduct = () => {
    let price = 0;
    let count = 0;
    setCart((state) => ({
      ...state,
      products: state.products.filter((product) => {
        if (id === product.id) {
          price = product.price;
          count = product.count;
          return false;
        }
        return true;
      }),
      sum: +state.sum - count * +price,
      count: state.count - count,
    }));
  };
  return { plusCount, minusCount, removeProduct };
};
export const useAddProduct = (product) => {
  const [cart, setCart] = useRecoilState(cartAtoms);
  const { plusCount } = useCartReducer(product.id);
  return () => {
    const find = cart.products.find(({ id }) => id === product.id);
    if (find) {
      plusCount(find.id);
    } else
      setCart((state) => {
        return {
          ...state,
          products: [...state.products, { ...product, count: 1 }],
          sum: +state.sum + Number.parseFloat(product.price),
          count: state.count + 1,
        };
      });

    clearTimeout(cart.popup.timerId);
    setCart((state) => {
      return {
        ...state,
        popup: { isEnable: true, name: product.name, img: product.img },
      };
    });
    const timerId = setTimeout(
      () =>
        setCart((cart) => ({
          ...cart,
          popup: { ...cart.popup, isEnable: false },
        })),
      3000
    );
    setCart((state) => ({
      ...state,
      popup: { ...state.popup, timerId },
    }));
  };
};

export const useRemovePopup = () => {
  const setCart = useSetRecoilState(cartAtoms);
  return () =>
    setCart((cart) => ({
      ...cart,
      popup: { ...cart.popup, isEnable: false },
    }));
};
export const getCartProductCount = selectorFamily({
  key: "getCartProductCount",
  get: (id) => ({ get }) => {
    const cart = get(cartAtoms);
    const product = cart.products.find((prod) => prod.id === id);
    return product ? product.count : 0;
  },
});
