import React, {useState} from "react";
import { Link } from "react-router-dom";
import Btnicon from "./Btnicon/Btnicon";
import Cart from "./Cart/Cart";
import OutsideClickHandler from 'react-outside-click-handler';

export default function Header(){
  const token = localStorage.getItem('user_session_token');
  const [cart, setCart] = useState(false);
  function handleClick(){
    if(cart == false){
      setCart(true)
    } else {
      setCart(false)
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
            <Btnicon className="favourite-area" href="#" src="assets/img/core-img/heart.svg" alternative="iconoFav"/>
            {token ? (
              <Btnicon className="user-login-info" href="/profile" src="assets/img/core-img/user.svg" alternative="iconoUser"/>
            ) : (
              <Btnicon className="user-login-info" href="/login" src="assets/img/core-img/user.svg" alternative="iconoUser"/>
            )}
            <div  onClick={handleClick}>
              <Btnicon onClick={handleClick} className="cart-area" href="#" src="assets/img/core-img/bag.svg" alternative="iconoCart" span="3"/>
            </div>
            {cart == true ? (
              <OutsideClickHandler onOutsideClick={() => {handleClick();}}>
                <Cart/>
              </OutsideClickHandler>
            ):(
              <></>
            )}
          </div>
        </div>
      </header>
    </>
  );
};