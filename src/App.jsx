import React from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";
import Product from "./components/Products/Product/Product";
import Contact from "./components/Contact/Contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { OrdersProvider } from "./context/OrdersState";
import { UserProvider } from "./context/UserContext/UserState";

import Register from "./components/Register/Register";
import ProfilePage from "./components/ProfilePage/ProfilePage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalProvider>
          <OrdersProvider>
            <UserProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product" element={<Product />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </UserProvider>
          </OrdersProvider>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}
