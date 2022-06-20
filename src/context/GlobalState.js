import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  products: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:8080/products/list");
    console.log("holiiiiii ", res);
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data.product,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        getProducts,
      }}
    >
      {children} {/* children son mis componentes hijos */}
    </GlobalContext.Provider>
  );
};
