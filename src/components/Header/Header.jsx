import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../Main/CartItem/CartItem";
import Btnicon from "./Btnicon/Btnicon";

export default function Header() {
  const token = localStorage.getItem("user_session_token");
  return (
    <>
      <header className="header_area">
        <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
          <nav className="classy-navbar" id="essenceNav">
            <Link className="nav-brand" to="/">
              Komorebi
            </Link>

            <div className="classy-navbar-toggler">
              <span className="navbarToggler">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>

            <div className="classy-menu">
              <div className="classycloseIcon">
                <div className="cross-wrap">
                  <span className="top"></span>
                  <span className="bottom"></span>
                </div>
              </div>

              <div className="classynav">
                <ul>
                  <li>
                    <Link to="/products">Tienda</Link>
                    {/* <div className="megamenu">
                      <ul className="single-mega cn-col-4">
                        <li className="title">Coleccion para ellas</li>
                        <li>
                          <a href="#">
                            <span>Titanio</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">Oro</a>
                        </li>
                        <li>
                          <a href="#">Acero</a>
                        </li>
                      </ul>
                      <ul className="single-mega cn-col-4">
                        <li className="title">Para ellos</li>
                        <li>
                          <a href="#">Titanio</a>
                        </li>
                        <li>
                          <a href="#">Oro</a>
                        </li>
                        <li>
                          <a href="#">Acero</a>
                        </li>
                      </ul>
                      <ul className="single-mega cn-col-4">
                        <li className="title">Unisex</li>
                        <li>
                          <a href="#">Titanio</a>
                        </li>
                        <li>
                          <a href="#">Oro</a>
                        </li>
                        <li>
                          <a href="#">Acero</a>
                        </li>
                      </ul>
                      <div className="single-mega cn-col-4">
                        <img src="assets/img/bg-img/bg-6.jpg" alt="" />
                      </div>
                    </div> */}
                  </li>
                  <li>
                    <a href="#">Menu</a>
                    <ul className="dropdown">
                      <li>
                        <Link to="/">Potrtada</Link>
                      </li>
                      <li>
                        <Link to="/products">Tienda</Link>
                      </li>
                      <li>
                        <a href="#">Pagar</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Contacto</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="header-meta d-flex clearfix justify-content-end">
            <div className="search-area">
              <form action="#" method="post">
                <input
                  type="search"
                  name="search"
                  id="headerSearch"
                  placeholder="Buscar..."
                />
                <button type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            <Btnicon
              className="favourite-area"
              href="#"
              src="assets/img/core-img/heart.svg"
              alternative="iconoFav"
            />
            {token ? (
              <Btnicon
                className="user-login-info"
                href="/profile"
                src="assets/img/core-img/user.svg"
                alternative="iconoUser"
              />
            ) : (
              <Btnicon
                className="user-login-info"
                href="/login"
                src="assets/img/core-img/user.svg"
                alternative="iconoUser"
              />
            )}
            <div>
              <Btnicon
                className="cart-area"
                href="#"
                src="assets/img/core-img/bag.svg"
                alternative="iconoCart"
                span="3"
              />
              <div className="cart-bg-overlay"></div>
              <div className="right-side-cart-area">
                <div className="cart-button">
                  <a href="#" id="rightSideCart">
                    <img src="assets/img/core-img/bag.svg" alt="" />{" "}
                    <span>3</span>
                  </a>
                </div>

                <div className="cart-content d-flex">
                  <div className="cart-list">
                    <CartItem
                      href="#"
                      src="assets/img/product-img/product-1.jpg"
                      badge="Acero"
                      item="Button Through Strap Mini Dress"
                      size="S"
                      color="Red"
                      price="45.00"
                    />
                    <CartItem
                      href="#"
                      src="assets/img/product-img/product-2.jpg"
                      badge="Mango"
                      item="Button Through Strap Mini Dress"
                      size="S"
                      color="Red"
                      price="45.00"
                    />
                    <CartItem
                      href="#"
                      src="assets/img/product-img/product-3.jpg"
                      badge="Mango"
                      item="Button Through Strap Mini Dress"
                      size="S"
                      color="Red"
                      price="45.00"
                    />
                  </div>

                  <div className="cart-amount-summary">
                    <h2>Summary</h2>
                    <ul className="summary-table">
                      <li>
                        <span>subtotal:</span> <span>$274.00</span>
                      </li>
                      <li>
                        <span>delivery:</span> <span>Free</span>
                      </li>
                      <li>
                        <span>discount:</span> <span>-15%</span>
                      </li>
                      <li>
                        <span>total:</span> <span>$232.00</span>
                      </li>
                    </ul>
                    <div className="checkout-btn mt-100">
                      <a href="#" className="btn essence-btn">
                        Finalizar Compra
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
