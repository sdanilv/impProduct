import { useReducer } from "react";

export const useCart = (init = { products: [], sum: 0 }) => {
  const [state, dispatch] = useReducer((state, { type, payload }) => {
    switch (type) {
      case "plusCount": {
        let price = 0;
        return {
          products: state.products.map((product) => {
            if (product.id === payload) {
              price = product.price;
              return { ...product, count: product.count + 1 };
            }
            return product;
          }),
          sum: state.sum + price,
        };
      }
      case "minusCount": {
        let price = 0;
        return {
          products: state.products.map((product) => {
            if (product.id === payload && product.count !== 1) {
              price = product.price;
              return { ...product, count: product.count - 1 };
            }
            return product;
          }),
          sum: state.sum - price,
        };
      }
      case "addProduct":

        return {
          ...state,
          products: [...state.products, { ...payload, count: 1 }],
          sum: state.sum + payload.price,
        };
      case "removeProduct": {
        let price = 0;
        const newState = {
          ...state,
          products: state.products.filter((product) => {

            if (payload === product.id) {
              price = product.price;
              return false;
            }
            return true;
          }),
          sum: state.sum - price,
        };
        console.log(newState)
        return newState;
      }

      default:
        return state;
    }
  }, init);
  const dispatched = (type, payload) => dispatch({ type, payload });
  const addToCart = (prod) => dispatched("addProduct", prod);
  const removeProduct = (id) => dispatched("removeProduct", id);
  const plusProductCount = (id) => dispatched("plusCount", id);
  const minusProductCount = (id) => dispatched("minusCount", id);
  const cartCount = state.products.length;
  const isCartEmpty = cartCount === 0;
  return {
    products: state.products,
    sum: state.sum,
    cartCount,
    removeProduct,
    plusProductCount,
    minusProductCount,
    addToCart,
    isCartEmpty,
  };
};
