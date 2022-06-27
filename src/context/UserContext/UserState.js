import React, { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";
import jwt from "jsonwebtoken";


const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  token: token ? token : null,
  user: null,
  message: "",
};

const API_URL = "http://localhost:8080";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = async (user) => {
    const res = await axios.post(API_URL + "/users/login", user);

    dispatch({
      type: "LOGIN",
      payload: res.data,
    });

    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
  };

  const getUserInfo = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  var decoded = jwt.verify(token, "secret");
  const res = await axios.get(API_URL + "/users/"+JSON.stringify((decoded.id)));
  dispatch({
    type: "GET_USER_INFO",
    payload: res.data.user,
  });
};

  const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(API_URL + "/users/logout", {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: "LOGOUT",
      payload: res.data,
    });
    if (res.data) {
      localStorage.removeItem("token");
    }
  };

  const register = async (user) => {
    const res = await axios.post(API_URL + "/users", user);

    dispatch({
      type: "REGISTER",
      payload: res.data,
    });
  };

  const updateUserInfo = async (user) => {
    const token = JSON.parse(localStorage.getItem("token"));
    var decoded = jwt.verify(token, "secret");
    console.log("This is UserSTate =",decoded.id)
    console.log("USER BODY  ", user);
    const res = await axios.put(API_URL + "/users/"+JSON.stringify((decoded.id)), user);
    console.log("ressss",res.data);
    dispatch({
      type: "UPDATE_USER",
      payload: res.data,
    });
  };

  const clearMessage = async () => {
    dispatch({
      type: "CLEARMESSAGE",
    });
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        message: state.message,
        login,
        getUserInfo,
        logout,
        register,
        clearMessage,
        updateUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
