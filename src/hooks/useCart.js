import { useReducer } from "react";
import {useEffect} from "react";

export const useCart = (

  init = {
    products: [],
    sum: 0,
    count: 0,
    popup: { isEnable: false, name: "", img: "" },
  }
) => {
let savedCart =  JSON.parse(localStorage.getItem("cart" )) || init;


  const [state, dispatch] = useReducer(
    (state, { type, payload }) => {
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
        default:
          return state;
      }
    },
      savedCart
  );

  const { products, sum, count, popup }  = state;
  const dispatched = (type, payload) => dispatch({ type, payload });
  const addPopup = (name, img) => {
    dispatched("addPopup", { name, img });
    setTimeout(() => dispatched("removePopup"), 3000);
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
  useEffect(()=> localStorage.setItem("cart", JSON.stringify(state))  , [state]);
  return {
    products,
    sum,
    cartCount: count,
    removeProduct,
    plusProductCount,
    minusProductCount,
    addToCart,
    cartPopup: popup,
    getCartProductCount,
  };
};
