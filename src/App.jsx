import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Products from "./components/Products/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import Loguin from "./components/Loguin/Loguin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<Products />} />
            <Route path="/loguin" element={<Loguin />} />
          </Routes>
          <Footer />
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
