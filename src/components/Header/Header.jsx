import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";
import Btnicon from "./Btnicon/Btnicon";
import Cart from "./Cart/Cart";
import OutsideClickHandler from "react-outside-click-handler";
import DarkMode from "./DarkMode/DarkMode.tsx";

export default function Header() {
  const { cart } = useContext(GlobalContext);
  const token = localStorage.getItem("token");
  const [cart1, setCart1] = useState(false);
  function handleClick() {
    if (cart1 == false) {
      setCart1(true);
    } else {
      setCart1(false);
    }
  }

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
                        <Link to="/cart">Cesta de la compra</Link>
                      </li>
                      <li>
                        <a
                          href="https://gregarious-fairy-d838d8.netlify.app/#reservas"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Reserva tu cita
                        </a>
                      </li>
                      <li>
                        <Link to="/contact">Contacto</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="https://gregarious-fairy-d838d8.netlify.app/#reservas"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reserva tu cita
                    </a>
                  </li>
                  <li>
                    <Link to="/contact">Contacto</Link>
                  </li>
                </ul>
                <DarkMode />
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
            {!token || token=="" || token == null ? (
              <Btnicon
                className="user-login-info"
                href="/login"
                src="assets/img/core-img/user.svg"
                alternative="iconoUser"
              />
            ) : (
              <Btnicon
                className="user-login-info"
                href="/profile"
                src="assets/img/core-img/user.svg"
                alternative="iconoUser"
              />
            )}
            <div onClick={handleClick}>
              <Btnicon
                onClick={handleClick}
                className="cart-area"
                href="#"
                src="assets/img/core-img/bag.svg"
                alternative="iconoCart"
                span={cart.length}
              />
            </div>
            {cart1 == true ? (
              <OutsideClickHandler
                onOutsideClick={() => {
                  handleClick();
                }}
              >
                <Cart />
              </OutsideClickHandler>
            ) : (
              <></>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
