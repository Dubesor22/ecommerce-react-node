import React, { useContext, useEffect, createOrder } from "react";
import CartItem from '../CartItem/CartItem'
import Btnicon from '../Btnicon/Btnicon'
import { GlobalContext } from "../../../context/GlobalState";
import carrito from "../../../assets/img/pngwing.com.png";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart(){
  const { cart, clearCart } = useContext(GlobalContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length <= 0) {
    return (
      <>
    <div  className="right-side-cart-area cart-on">
              <div className="cart-button">
                <Btnicon className="cart-area" href="#" src="assets/img/core-img/bag.svg" alternative="iconoCart" span={cart.length}/>
              </div>
      
              <div id="center" className="cart-content d-flex">
                <div className="cart-amount-summary">
                  <h2>Tu lista de la compra esta vacia</h2>
                  <div id="not-invert">
                     <img id="carrito" src={carrito} alt=" carrito" />
                  </div>
                  <ul className="summary-table">
                    <li>
                      <span>subtotal:</span> <span>$0</span>
                    </li>
                    <li>
                      <span>delivery:</span> <span>Free</span>
                    </li>
                    <li>
                      <span>discount:</span> <span>0</span>
                    </li>
                    <li>
                      <span>total:</span> <span>$0</span>
                    </li>
                  </ul>
                  <div className="checkout-btn mt-100">
                  <Link to="/products"><a href="#" className="btn essence-btn" id="btnWrong">
                      Add items to cart
                    </a></Link>
                  </div>
                </div>
              </div>
            </div>
    </>
    );
  }
  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
  };
  const cartItem = cart.map((cartItem, i) => {
    return (
      <CartItem href={cartItem.id} src={cartItem.image} i={i} badge={cartItem.badge} item={cartItem.item} size={cartItem.size} color={cartItem.color} price={cartItem.price}/>
    );
  });

  return (
    <>
    <div className="right-side-cart-area cart-on">
              <div className="cart-button">
                <Btnicon className="cart-area" href="#" src="assets/img/core-img/bag.svg" alternative="iconoCart" span="3"/>
              </div>
      
              <div className="cart-content d-flex">
                <div className="cart-list">
                  {cartItem}
                </div>
                <div className="cart-amount-summary">
                  <h2>Summary</h2>
                  <ul className="summary-table">
                    <li>
                      <span>subtotal:</span> <span>{cart.map(item => item.price).reduce((prev, next) => prev + next)}</span>
                    </li>
                    <li>
                      <span>delivery:</span> <span>Free</span>
                    </li>
                    <li>
                      <span>discount:</span> <span>10%</span>
                    </li>
                    <li>
                      <span>total:</span> <span>{cart.map(item => item.price).reduce((prev, next) => prev + next)-(cart.map(item => item.price).reduce((prev, next) => prev + next)*0.1)}</span>
                    </li>
                  </ul>
                  <div className="checkout-btn mt-100">
                    <a href="#" onClick={() => createNewOrder()} className="btn essence-btn" id="btnWrong">
                      Finalizar Compra
                    </a>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}