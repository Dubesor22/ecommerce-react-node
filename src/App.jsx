import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Products from "./components/Products/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}