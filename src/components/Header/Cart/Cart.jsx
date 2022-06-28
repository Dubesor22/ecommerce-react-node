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
  const token = localStorage.getItem("token");
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
                  <Link to="/products" className="btn essence-btn" id="btnWrong">
                    Añade productos al carrito
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

    // const mockitem = [{id:1,image:"data:image/jpeg;base64,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",badge:"Piercing",name:"Modelo de ORO",size:"M", color:"red", price:50}]
  const cartItems = cart.map((cartItem, i) => {
    console.log(JSON.stringify(cartItem));
    return (
      <CartItem
        href={cartItem.id}
        src={cartItem.image}
        i={i}
        badge={cartItem.badge}
        item={cartItem.name}
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
                <Btnicon className="cart-area" href="#" src="assets/img/core-img/bag.svg" alternative="iconoCart" span={cart.length}/>
              </div>
      
              <div className="cart-content d-flex">
                <div className="cart-list">
                  {cartItems}
                </div>
                <div className="cart-amount-summary">
                  <h2>Summary</h2>
                  <ul className="summary-table">
                    <li>
                      <span>subtotal:</span> <span>{cart.map(item => item.price).reduce((prev, next) => prev + next)}€</span>
                    </li>
                    <li>
                      <span>delivery:</span> <span>Free</span>
                    </li>
                    <li>
                      <span>discount:</span> <span>10%</span>
                    </li>
                    <li>
                      <span>total:</span> <span>{cart.map(item => item.price).reduce((prev, next) => prev + next)-(cart.map(item => item.price).reduce((prev, next) => prev + next)*0.1)}€</span>
                    </li>
                  </ul>
                  <form action="/create-checkout-session" method="POST">
                    <div className="checkout-btn mt-100">
                    {!token || token==="" || token === null ? (
                      <p onClick={() => (navigate("/login"), window.location.reload())} className="btn essence-btn" id="btnWrong">
                        Finalizar Compra
                      </p>
                       ) : (
                      <button type="submit" onClick={() => createNewOrder()} className="btn essence-btn" id="btnWrong">
                        Finalizar Compra
                      </button>
                        )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
    </>
  );
}
