import React from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";
import Product from "./components/Products/Product/Product";
import Contact from "./components/Contact/Contact";
import { Redirect } from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { OrdersProvider } from "./context/OrdersState";
import { UserProvider } from "./context/UserContext/UserState";

import Register from "./components/Register/Register";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import PaymentSuccesful from "./components/PaymentSuccesful/PaymentSuccesful";
import NotFound from "./components/NotFound/NotFound";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalProvider>
          <OrdersProvider>
            <UserProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Navigate replace to="/intro" />} />
                <Route path="/intro" element={<Main />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product" element={<Product />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/checkout" element={<PaymentSuccesful/>} />
                <Route path="*" element={<NotFound/>} />
              </Routes>
              <Footer />
            </UserProvider>
          </OrdersProvider>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}
