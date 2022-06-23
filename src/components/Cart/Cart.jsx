import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Cart.css";
import { Link } from "react-router-dom";
import carrito from "../../assets/img/pngwing.com.png";
import CartItem from "./CartItem.jsx/CartItem";
import { OrdersContext } from "../../context/OrdersState";

const Cart = () => {
  const { cart, clearCart, clearOneCartItem } = useContext(GlobalContext);
  const { createOrder } = useContext(OrdersContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length <= 0) {
    return (
      <div className="empty">
        <h2>Tu Lista de la compra esta vacia</h2>
        <br />
        <div id="not-invert">
          <img  id="carrito" src={carrito} alt=" carrito" />
        </div>
        <div className="checkout-btn mt-100">
          <Link to="/products">
            <a href="#" className="btn essence-btn" id="btnWrong">
              Add items to cart
            </a>
          </Link>
        </div>
      </div>
    );
  }
  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
  };

  const cartItem = cart.map((cartItem, i) => {
    console.log(cartItem);
    return (
      <tbody>
        <tr>
          <td className="cart" key={i}>
            <figure class="itemside align-items-center">
              <div class="aside">
                <img src={cartItem.image} class="img-sm w-100" />
              </div>
              <figcaption class="info">
                {" "}
                <a href="#" class="title text-dark" data-abc="true">
                  {cartItem.name}
                </a>
                <p class="text-muted small">aqui la categoria</p>
              </figcaption>
            </figure>
          </td>
          <td>
            {" "}
            <select class=" ">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>{" "}
          </td>
          <td>
            <div class="price-wrap">
              {" "}
              <span>{cartItem.price.toFixed(2)}</span>
            </div>
          </td>
          <td class="text-right d-none d-md-block">
            {" "}
            <a
              data-original-title="Save to Wishlist"
              title=""
              href=""
              class="btn btn-outline-primary"
              data-toggle="tooltip"
              data-abc="true"
            >
              {" "}
              <i class="fa fa-heart"></i>
            </a>{" "}
            <br />
            <button
              class="btn btn-outline-danger"
              onClick={() => clearOneCartItem(cartItem.id)}
              data-abc="true"
            >
              ❌
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
                  <dd class="text-right ml-3">69.97</dd>
                </dl>
                <dl class="dlist-align">
                  <dt>Descuento:</dt>
                  <dd class="text-right text-danger ml-3">- 10.00</dd>
                </dl>
                <dl class="dlist-align">
                  <dt>Total:</dt>
                  <dd class="text-right text-dark b ml-3">
                    <strong>59.97</strong>
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
