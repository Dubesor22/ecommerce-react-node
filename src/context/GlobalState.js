import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const cart = JSON.parse(localStorage.getItem("cart"));
const initialState = {
  products: [],
  cart: cart ? cart : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:8080/products/list");
    console.log("holiiiiii ", res.data);
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data.product,
    });
  };

  const addCart = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const clearOneCartItem = (id) => {
    dispatch({
      type: "CLEAR_ONE_CART_ITEM",
      payload: id,
    });
  };

  const clearOnlyOneCartItem = (id) => {
    const item = state.cart.map(object => object.id).indexOf(id);
    const newCart =state.cart.splice(item, 1);
    dispatch({
      type:"CLEAR_ONLY_ONE_CART_ITEM",
      payload: newCart,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        getProducts,
        addCart,
        clearCart,
        clearOneCartItem,
        clearOnlyOneCartItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
