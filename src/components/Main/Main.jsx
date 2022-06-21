import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";
// import LinkP from "./Link/LinkP";
import ProductWrapper from "./ProductWrapper/ProductWrapper";
import image1 from "../../assets/bg-img/bg-2.jpg";

export default function Main() {
  return (
    <div>
      {/* <div className="cart-bg-overlay"></div>

      <div className="right-side-cart-area">
        <div className="cart-button">
          <a href="#" id="rightSideCart">
            <img src="assets/img/core-img/bag.svg" alt="" /> <span>3</span>
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
      </div> */}

      <section
        className="welcome_area bg-img background-overlay"
        style={{ backgroundImage: "url(assets/img/bg-img/bg-1.jpg)" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="hero-content">
                <h6>Yolanda Lopez</h6>
                <h2>"Lo mas intimo de mi"</h2>
                <a href="#" className="btn essence-btn">
                  Ver Coleccion
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="top_catagory_area section-padding-80 clearfix">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-6 col-md-4">
              <div
                class="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                style={{ backgroundImage: "url(assets/img/bg-img/bg-2.jpg)" }}
              >
                <div class="catagory-content">
                  <Link to="#">Tatuajes</Link>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <div
                class="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                style={{ backgroundImage: "url(assets/img/bg-img/bg-3.jpg)" }}
              >
                <div class="catagory-content">
                  <Link to="/products">Piercing</Link>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <div
                class="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                style={{ backgroundImage: "url(assets/img/bg-img/bg-4.jpg)" }}
              >
                <div class="catagory-content">
                  <Link to="#">microBlading</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cta-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                class="cta-content bg-img background-overlay"
                style={{ backgroundImage: "url(assets/img/bg-img/bg-5.jpg)" }}
              >
                <div class="h-100 d-flex align-items-end pb-5 justify-content-end">
                  <div class="cta--text">
                    <h6>-60%</h6>
                    <h2>Lanzamiento</h2>
                    <Link to="#" class="btn essence-btn">
                      Comprar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="cta-content bg-img background-overlay"
                style={{ backgroundImage: "url(assets/img/bg-img/bg-5.jpg)" }}
              >
                <div className="h-100 d-flex align-items-end pb-5 justify-content-end">
                  <div className="cta--text">
                    <h6>-60%</h6>
                    <h2>Lanzamiento</h2>
                    <Link to="#" className="btn essence-btn">
                      Comprar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="new_arrivals_area section-padding-80 clearfix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading text-center">
                <h2>Productos Populares</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="popular-products-slides owl-carousel">
                <ProductWrapper
                  image1="assets/img/product-img/product-1.jpg"
                  image2="assets/img/product-img/product-2.jpg"
                  href1="#"
                  name="Disenyo oreja"
                  href2="#"
                  material="Plata de ley"
                  price="80.00"
                />
                <ProductWrapper
                  image1="assets/img/product-img/product-2.jpg"
                  image2="assets/img/product-img/product-3.jpg"
                  href1="#"
                  name="Trabus"
                  href2="#"
                  material="Oro"
                  price="80.00"
                />
                <ProductWrapper
                  image1="assets/img/product-img/product-3.jpg"
                  image2="assets/img/product-img/product-4.jpg"
                  offer="30"
                  href1="#"
                  name="Conch"
                  href2="#"
                  material="Titanio"
                  price="55.00"
                />
                <ProductWrapper
                  image1="assets/img/product-img/product-4.jpg"
                  image2="assets/img/product-img/product-5.jpg"
                  nuevo="true"
                  href1="#"
                  name="Titanio"
                  href2="#"
                  material="Helix"
                  price="30.00"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
