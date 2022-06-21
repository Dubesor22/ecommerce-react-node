import React, { useContext, useEffect, createOrder } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { OrdersContext } from "../../context/OrdersState";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart } = useContext(GlobalContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length <= 0) {
    return <span>No tienes ningún producto añadido</span>;
  }
  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
  };

  const cartItem = cart.map((cartItem, i) => {
    return (
      <tbody>
        <tr>
          <td className="cart" key={i}>
            <figure class="itemside align-items-center">
              <div class="aside">
                <img src="https://i.imgur.com/1eq5kmC.png" class="img-sm" />
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
            <select class="form-control">
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
              class="btn btn-light"
              data-toggle="tooltip"
              data-abc="true"
            >
              {" "}
              <i class="fa fa-heart"></i>
            </a>{" "}
            <a href="" class="btn btn-light" data-abc="true">
              {" "}
              Remove
            </a>{" "}
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
                        Quantity
                      </th>
                      <th scope="col" width="120">
                        Price
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
            <div class="card mb-3">
              <div class="card-body">
                <form>
                  <div class="form-group">
                    {" "}
                    <label>Have coupon?</label>
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
                        <button class="btn btn-primary btn-apply coupon">
                          Apply
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
                  <dd class="text-right ml-3">$69.97</dd>
                </dl>
                <dl class="dlist-align">
                  <dt>Descuento:</dt>
                  <dd class="text-right text-danger ml-3">- $10.00</dd>
                </dl>
                <dl class="dlist-align">
                  <dt>Total:</dt>
                  <dd class="text-right text-dark b ml-3">
                    <strong>$59.97</strong>
                  </dd>
                </dl>
                <hr />{" "}
                <div class="d-grid gap-3 container">
                  <div class="row justify-content-between">
                    <button className="col btn btn-primary">
                      <Link
                        to="#"
                        class="btn btn-primary btn-square btn-main"
                        data-abc="true"
                      >
                        {" "}
                        Tramitar pedido
                      </Link>{" "}
                    </button>

                    <button class="col btn btn-primary">
                      <Link
                        to="/products"
                        class="btn btn-primary"
                        data-abc="true"
                      >
                        Continuar comprando
                      </Link>
                    </button>
                    <button
                      className="col btn btn-primary"
                      onClick={() => clearCart()}
                    >
                      Vaciar Carrito
                    </button>
                    <button
                      className="col btn btn-primary"
                      onClick={() => createNewOrder()}
                    >
                      Crear Nuevo Pedido
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
