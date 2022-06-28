import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Cart.css";
import { Link } from "react-router-dom";
import carrito from "../../assets/img/pngwing.com.png";
// import CartItem from "./CartItem.jsx/CartItem";
import { OrdersContext } from "../../context/OrdersState";

const Cart = () => {
  const { cart, clearCart, clearOneCartItem, clearOnlyOneCartItem } = useContext(GlobalContext);
  const { createOrder } = useContext(OrdersContext);
  const [amount, setAmount] = useState(1);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const increment = () => {
    setAmount(amount + 1);
  };

  const decrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const oneItemPrice = (item) => {
    return item.price * amount;
  };

  const totalPrice = () => {
    let total = 0;
    cart.map((item) => {
      total += item.price * amount;
    });
    return total;
  };

  if (cart.length <= 0) {
    return (
      <div className="empty">
        <h2>Tu Lista de la compra esta vacia</h2>
        <br />
        <div id="not-invert">
          <img id="carrito" src={carrito} alt=" carrito" />
        </div>
        <div className="checkout-btn mt-100">
            <Link to="/products" className="btn essence-btn" id="btnWrong">
            Añade productos al carrito
            </Link>
        </div>
      </div>
    );
  }
  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
  };
  console.log("this is cart",cart);
  const cartItem = cart.map((cartItem, i) => {
    console.log(cartItem);
    return (
      <tbody>
        <tr>
          <td className="cart" key={i}>
            <figure class="itemside align-items-center">
              <div class="aside">
                <img src={cartItem.image} class="img-sm w-100" alt=""/>
              </div>
              <figcaption class="info">
                {" "}
                <Link to="#" class="title text-dark" data-abc="true">
                  {cartItem.name}
                </Link>
                <p class="text-muted small">aqui la categoria</p>
              </figcaption>
            </figure>
          </td>
          <td className="d-flex">
            <button class="btn btn-primary w-50" onClick={decrement}>
              -
            </button>
            <span class="text-dark">{amount}</span>
            <div className="cart-quantity w-50">
              <p className="text-center"> {cartItem.amount} </p>
            </div>
            <button class="btn btn-primary w-50" onClick={increment}>
              +
            </button>
          </td>
          <td>
            <div class="price-wrap">
              {" "}
              <span>{oneItemPrice(cartItem)}€</span>
            </div>
          </td>
          <td class="text-right d-none d-md-block">
            {" "}
            <Link
              data-original-title="Save to Wishlist"
              title=""
              to="#"
              class="btn btn-outline-primary"
              data-toggle="tooltip"
              data-abc="true"
            >
              {" "}
              <i class="fa fa-heart"></i>
            </Link>{" "}
            <br />
            <button
              class="btn btn-outline-danger"
              onClick={() => clearOnlyOneCartItem(cartItem.id)}
              data-abc="true"
            >
              <span role="img" aria-label="cross">
                ❌
              </span>
            </button>{" "}
          </td>
        </tr>
      </tbody>
    );
  });
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <aside class="col-lg-9">
            <div class="card">
              <div class="table-responsive">
                <table class="table table-borderless table-shopping-cart">
                  <thead class="text-muted">
                    <tr class="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width="120">
                        Cantidad
                      </th>
                      <th scope="col" width="120">
                        Precio
                      </th>
                      <th
                        scope="col"
                        class="text-right d-none d-md-block"
                        width="200"
                      ></th>
                    </tr>
                  </thead>

                  {cartItem}
                </table>
              </div>
            </div>
          </aside>
          <aside class="col-lg-3">
            <div class="card mb-3 mt-3">
              <div class="card-body mt-1">
                <form>
                  <div class="form-group mt-3">
                    {" "}
                    <label>Tienes un codigo descuento?</label>
                    <div class="input-group">
                      {" "}
                      <input
                        type="text"
                        class="form-control coupon"
                        name=""
                        placeholder="Coupon code"
                      />{" "}
                      <span class="input-group-append">
                        {" "}
                        <button class="btn btn-primary w-75 btn-apply coupon">
                          Aplicar
                        </button>{" "}
                      </span>{" "}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <dl class="dlist-align">
                  <dt>Precio Total:</dt>
                  {/* <dd class="text-right ml-3">{cart.map(item => item.price).reduce((prev, next) => prev + next)}</dd> */}
                  <dd class="text-right ml-3">{totalPrice()}€</dd>
                </dl>
                <dl class="dlist-align">
                  <dt>Descuento:</dt>
                  <dd class="text-right text-danger ml-3">10%</dd>
                </dl>
                <dl class="dlist-align">
                  <dt>Total:</dt>
                  <dd class="text-right text-dark b ml-3">
                    <strong>{totalPrice()-(totalPrice()*0.1)}€</strong>
                  </dd>
                </dl>
                <hr />{" "}
                <div class="d-grid h-100 w-100 container">
                  <div class="column justify-content-around">
                    {" "}
                    <button class="col btn btn-primary  w-100 mb-3">
                      <Link
                        to="/products"
                        class="btn btn-primary"
                        data-abc="true"
                      >
                        Continua comprando
                      </Link>{" "}
                    </button>
                    <button class="col btn btn-primary  w-100 mb-3">
                      <Link
                        to="/products"
                        className="col btn btn-primary w-100"
                        onClick={() => createNewOrder()}
                        data-abc="true"
                      >
                        Tramita pedido
                      </Link>{" "}
                    </button>
                    <button class="col btn btn-primary  w-100 mb-3">
                      <Link
                        to="/cart "
                        className="col btn btn-primary w-100"
                        onClick={() => clearCart()}
                        data-abc="true"
                      >
                        Vacia Carrito
                      </Link>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Cart;
