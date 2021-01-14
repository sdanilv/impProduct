import { useReducer } from "react";
import { useEffect } from "react";
const init = {
  products: [],
  sum: 0,
  count: 0,
  popup: { isEnable: false, name: "", img: "", timerId:0 },
};
export const useCart = (productsList) => {
  let initCart = init;
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
    initCart = { ...initCart, products, count, sum };
  }

  const [state, dispatch] = useReducer((state, { type, payload }) => {
    switch (type) {
      case "plusCount": {
        let price = 0;
        return {
          ...state,
          products: state.products.map((product) => {
            if (product.id === payload) {
              price = product.price;
              return { ...product, count: product.count + 1 };
            }
            return product;
          }),
          sum: +state.sum + Number.parseFloat(price),
          count: state.count + 1,
        };
      }

      case "minusCount": {
        let price = 0;
        let count = 0;
        return {
          ...state,
          products: state.products.map((product) => {
            if (product.id === payload && product.count !== 1) {
              price = product.price;
              count = 1;
              return { ...product, count: product.count - 1 };
            }
            return product;
          }),
          sum: +state.sum - price,
          count: state.count - count,
        };
      }
      case "addProduct":
        return {
          ...state,
          products: [...state.products, { ...payload, count: 1 }],
          sum: +state.sum + Number.parseFloat(payload.price),
          count: state.count + 1,
        };
      case "removeProduct": {
        let price = 0;
        let count = 0;
        return {
          ...state,
          products: state.products.filter((product) => {
            if (payload === product.id) {
              price = product.price;
              count = product.count;
              return false;
            }
            return true;
          }),
          sum: +state.sum - count * +price,
          count: state.count - count,
        };
      }
      case "addPopup":
        return { ...state, popup: { isEnable: true, ...payload } };
      case "removePopup":
        return { ...state, popup: { ...state.popup, isEnable: false } };
      case "setTimerId":    return { ...state, popup: { ...state.popup, timerId: payload } };
      default:
        return state;
    }
  }, initCart);

  const { products, sum, count, popup } = state;
  const dispatched = (type, payload) => dispatch({ type, payload });
  const removePopup = () => dispatched("removePopup");
  const addPopup = (name, img) => {
    console.log(popup.timerId)
    clearTimeout(popup.timerId)
    dispatched("addPopup", { name, img });
   const timerId =  setTimeout(() => dispatched("removePopup"), 3000);
    dispatched("setTimerId", timerId);
  };
  const addToCart = (prod) => {
    const find = products.find(({ id }) => id === prod.id);
    if (find) plusProductCount(find.id);
    else dispatched("addProduct", prod);
    addPopup(prod.name, prod.img);
  };
  const removeProduct = (id) => dispatched("removeProduct", id);
  const plusProductCount = (id) => dispatched("plusCount", id);
  const minusProductCount = (id) => dispatched("minusCount", id);
  const getCartProductCount = (id) => {
    const product = products.find((prod) => prod.id === id);
    return product ? product.count : 0;
  };
  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify({products}));
  }, [products]);
  return {
    products,
    sum,
    cartCount: count,
    removeProduct,
    plusProductCount,
    minusProductCount,
    addToCart,
    removePopup,
    cartPopup: popup,
    getCartProductCount,
  };
};
