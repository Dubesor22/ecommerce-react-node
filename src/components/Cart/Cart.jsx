import React, { useContext, useEffect, createOrder } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Cart.css";
import { Link } from "react-router-dom";
import carrito from "../../assets/img/pngwing.com.png";
import CartItem from "./CartItem.jsx/CartItem";

const Cart = () => {
  const { cart, clearCart, clearOneCartItem } = useContext(GlobalContext);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length <= 0) {
    return (
      <div className="empty">
        <h2>Tu Lista de la compra esta vacia</h2>
        <br />
        <img src={carrito} alt=" carrito" />
        <div className="checkout-btn mt-100">
                  <Link to="/products"><a href="#" className="btn essence-btn" id="btnWrong">
                      Add items to cart
                    </a></Link>
                  </div>
      </div>
    );
  }
  // const createNewOrder = () => {
  //   createOrder(cart);
  //   clearCart();
  // };

  const cartItem = cart.map((cartItem, i) => {
    console.log(cartItem);
    return (
      <CartItem cartItem={cartItem} i={i}/>
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
                    <button className="col btn btn-primary w-100 mb-3">
                      <Link to="#" class="btn btn-primary" data-abc="true">
                        {" "}
                        Tramita pedido
                      </Link>{" "}
                    </button>

                    <button class="col btn btn-primary  w-100 mb-3">
                      <Link
                        to="/products"
                        class="btn btn-primary"
                        data-abc="true"
                      >
                        Continua comprando
                      </Link>
                    </button>
                    <button
                      className="col btn btn-primary w-100"
                      onClick={() => clearCart()}
                    >
                      Vacia Carrito
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