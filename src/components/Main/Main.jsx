import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className="cart-bg-overlay"></div>

      <div className="right-side-cart-area">
        <div className="cart-button">
          <a href="#" id="rightSideCart">
            <img src="assets/img/core-img/bag.svg" alt="" /> <span>3</span>
          </a>
        </div>

        <div className="cart-content d-flex">
          <div className="cart-list">
            <div className="single-cart-item">
              <a href="#" className="product-image">
                <img
                  src="assets/img/product-img/product-1.jpg"
                  className="cart-thumb"
                  alt=""
                />

                <div className="cart-item-desc">
                  <span className="product-remove">
                    <i className="fa fa-close" aria-hidden="true"></i>
                  </span>
                  <span className="badge">Acero</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p className="size">Size: S</p>
                  <p className="color">Color: Red</p>
                  <p className="price">45.00</p>
                </div>
              </a>
            </div>

            <div className="single-cart-item">
              <a href="#" className="product-image">
                <img
                  src="assets/img/product-img/product-2.jpg"
                  className="cart-thumb"
                  alt=""
                />

                <div className="cart-item-desc">
                  <span className="product-remove">
                    <i className="fa fa-close" aria-hidden="true"></i>
                  </span>
                  <span className="badge">Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p className="size">Size: S</p>
                  <p className="color">Color: Red</p>
                  <p className="price">$45.00</p>
                </div>
              </a>
            </div>

            <div className="single-cart-item">
              <a href="#" className="product-image">
                <img
                  src="assets/img/product-img/product-3.jpg"
                  className="cart-thumb"
                  alt=""
                />

                <div className="cart-item-desc">
                  <span className="product-remove">
                    <i className="fa fa-close" aria-hidden="true"></i>
                  </span>
                  <span className="badge">Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p className="size">Size: S</p>
                  <p className="color">Color: Red</p>
                  <p className="price">45.00</p>
                </div>
              </a>
            </div>
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
      </div>

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

      <div className="top_catagory_area section-padding-80 clearfix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-md-4">
              <div
                className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                style={{ backgroundImage: "url(assets/img/bg-img/bg-2.jpg)" }}
              >
                <div className="catagory-content">
                  <Link to="#">Tatuajes</Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div
                className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                style={{ backgroundImage: "url(assets/img/bg-img/bg-3.jpg)" }}
              >
                <div className="catagory-content">
                  <Link to="/products">Piercing</Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div
                className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                style={{ backgroundImage: "url(assets/img/bg-img/bg-4.jpg)" }}
              >
                <div className="catagory-content">
                  <Link to="#">microBlading</Link>
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
                <div className="single-product-wrapper">
                  <div className="product-img">
                    <img src="assets/img/product-img/product-1.jpg" alt="" />

                    <img
                      className="hover-img"
                      src="assets/img/product-img/product-2.jpg"
                      alt=""
                    />

                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart"></a>
                    </div>
                  </div>

                  <div className="product-description">
                    <span>Disenyo oreja</span>
                    <a href="#">
                      <h6>Plata de ley</h6>
                    </a>
                    <p className="product-price">$80.00</p>

                    <div className="hover-content">
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Sumar al Carro
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-product-wrapper">
                  <div className="product-img">
                    <img src="assets/img/product-img/product-2.jpg" alt="" />

                    <img
                      className="hover-img"
                      src="assets/img/product-img/product-3.jpg"
                      alt=""
                    />

                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart"></a>
                    </div>
                  </div>

                  <div className="product-description">
                    <span>Trabus</span>
                    <a href="#">
                      <h6>Oro</h6>
                    </a>
                    <p className="product-price">80.00</p>

                    <div className="hover-content">
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Sumar al Carro
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-product-wrapper">
                  <div className="product-img">
                    <img src="assets/img/product-img/product-3.jpg" alt="" />

                    <img
                      className="hover-img"
                      src="assets/img/product-img/product-4.jpg"
                      alt=""
                    />

                    <div className="product-badge offer-badge">
                      <span>-30%</span>
                    </div>

                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart"></a>
                    </div>
                  </div>

                  <div className="product-description">
                    <span>Conch</span>
                    <a href="#">
                      <h6>Titanio</h6>
                    </a>
                    <p className="product-price">
                      <span className="old-price">75.00</span> 55.00
                    </p>

                    <div className="hover-content">
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Sumar al Carro
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-product-wrapper">
                  <div className="product-img">
                    <img src="assets/img/product-img/product-4.jpg" alt="" />

                    <img
                      className="hover-img"
                      src="assets/img/product-img/product-5.jpg"
                      alt=""
                    />

                    <div className="product-badge new-badge">
                      <span>Nuevo</span>
                    </div>

                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart"></a>
                    </div>
                  </div>

                  <div className="product-description">
                    <span>Titanio</span>
                    <a href="#">
                      <h6>Helix</h6>
                    </a>
                    <p className="product-price">30 Euros</p>

                    <div className="hover-content">
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Sumar al Carro
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
