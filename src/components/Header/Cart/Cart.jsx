import React, { useContext, useEffect, createOrder } from "react";
import CartItem from "../CartItem/CartItem";
import Btnicon from "../Btnicon/Btnicon";
import { GlobalContext } from "../../../context/GlobalState";
import { UserContext } from "../../../context/UserContext/UserState";
import carrito from "../../../assets/img/pngwing.com.png";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
import axios from "axios";


export default function Cart() {
  const { cart, clearCart } = useContext(GlobalContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length <= 0) {
    return (
      <>
        <div className="right-side-cart-area cart-on">
          <div className="cart-button">
            <Btnicon
              className="cart-area"
              href="#"
              src="assets/img/core-img/bag.svg"
              alternative="iconoCart"
              span={cart.length}
            />
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
                <Link to="/products">
                  <Link to="#" className="btn essence-btn" id="btnWrong">
                    Add items to cart
                  </Link>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  const createNewOrder = () => {
    createOrder(cart);
    axios.post("http://localhost:8080/orders/create-checkout-session", {
      cart,
      userId: user.id
    }).then((response) => {
      if (response.data.url) {
        window.location.href = response.data.url;
      } else {
        navigate("/404");
      }
    })
    .catch((err) => console.log(err.message));
    clearCart();
    navigate("/checkout");
    };
  const cartItem = cart.map((cartItem, i) => {
    return (
      <CartItem
        href={cartItem.id}
        src={cartItem.image}
        i={i}
        badge={cartItem.badge}
        item={cartItem.item}
        size={cartItem.size}
        color={cartItem.color}
        price={cartItem.price}
      />
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
                  <form action="/create-checkout-session" method="POST">
                    <div className="checkout-btn mt-100">
                      <button type="submit" href="#" onClick={() => createNewOrder()} className="btn essence-btn" id="btnWrong">
                        Finalizar Compra
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
    </>
  );
}
