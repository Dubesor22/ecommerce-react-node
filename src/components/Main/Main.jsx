import React from "react";

const Main = () => {
  return (
    <div>
      <div class="cart-bg-overlay"></div>

      <div class="right-side-cart-area">
        <div class="cart-button">
          <a href="#" id="rightSideCart">
            <img src="assets/img/core-img/bag.svg" alt="" /> <span>3</span>
          </a>
        </div>

        <div class="cart-content d-flex">
          <div class="cart-list">
            <div class="single-cart-item">
              <a href="#" class="product-image">
                <img
                  src="assets/img/product-img/product-1.jpg"
                  class="cart-thumb"
                  alt=""
                />

                <div class="cart-item-desc">
                  <span class="product-remove">
                    <i class="fa fa-close" aria-hidden="true"></i>
                  </span>
                  <span class="badge">Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p class="size">Size: S</p>
                  <p class="color">Color: Red</p>
                  <p class="price">$45.00</p>
                </div>
              </a>
            </div>

            <div class="single-cart-item">
              <a href="#" class="product-image">
                <img
                  src="assets/img/product-img/product-2.jpg"
                  class="cart-thumb"
                  alt=""
                />

                <div class="cart-item-desc">
                  <span class="product-remove">
                    <i class="fa fa-close" aria-hidden="true"></i>
                  </span>
                  <span class="badge">Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p class="size">Size: S</p>
                  <p class="color">Color: Red</p>
                  <p class="price">$45.00</p>
                </div>
              </a>
            </div>

            <div class="single-cart-item">
              <a href="#" class="product-image">
                <img
                  src="assets/img/product-img/product-3.jpg"
                  class="cart-thumb"
                  alt=""
                />

                <div class="cart-item-desc">
                  <span class="product-remove">
                    <i class="fa fa-close" aria-hidden="true"></i>
                  </span>
                  <span class="badge">Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p class="size">Size: S</p>
                  <p class="color">Color: Red</p>
                  <p class="price">45.00</p>
                </div>
              </a>
            </div>
          </div>

          <div class="cart-amount-summary">
            <h2>Summary</h2>
            <ul class="summary-table">
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
            <div class="checkout-btn mt-100">
              <a href="#" class="btn essence-btn">
                check out
              </a>
            </div>
          </div>
        </div>
      </div>

      <section
        class="welcome_area bg-img background-overlay"
        style={{ backgroundImage: "url(assets/img/bg-img/bg-1.jpg)" }}
      >
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12">
              <div class="hero-content">
                <h6>Yolanda Lopez</h6>
                <h2>"Lo mas intimo de mi"</h2>
                <a href="#" class="btn essence-btn">
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
                  <a href="#">Tatuajes</a>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4">
              <div
                class="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                style={{ backgroundImage: "url(assets/img/bg-img/bg-3.jpg)" }}
              >
                <div class="catagory-content">
                  <a href="#">Piercing</a>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4">
              <div
                class="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                style={{ backgroundImage: "url(assets/img/bg-img/bg-4.jpg)" }}
              >
                <div class="catagory-content">
                  <a href="#">microBlading</a>
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
                    <a href="#" class="btn essence-btn">
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="new_arrivals_area section-padding-80 clearfix">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-heading text-center">
                <h2>Productos Populares</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="popular-products-slides owl-carousel">
                <div class="single-product-wrapper">
                  <div class="product-img">
                    <img src="assets/img/product-img/product-1.jpg" alt="" />

                    <img
                      class="hover-img"
                      src="assets/img/product-img/product-2.jpg"
                      alt=""
                    />

                    <div class="product-favourite">
                      <a href="#" class="favme fa fa-heart"></a>
                    </div>
                  </div>

                  <div class="product-description">
                    <span>Disenyo oreja</span>
                    <a href="#">
                      <h6>Plata de ley</h6>
                    </a>
                    <p class="product-price">$80.00</p>

                    <div class="hover-content">
                      <div class="add-to-cart-btn">
                        <a href="#" class="btn essence-btn">
                          Sumar al Carro
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="single-product-wrapper">
                  <div class="product-img">
                    <img src="assets/img/product-img/product-2.jpg" alt="" />

                    <img
                      class="hover-img"
                      src="assets/img/product-img/product-3.jpg"
                      alt=""
                    />

                    <div class="product-favourite">
                      <a href="#" class="favme fa fa-heart"></a>
                    </div>
                  </div>

                  <div class="product-description">
                    <span>Trabus</span>
                    <a href="#">
                      <h6>Oro</h6>
                    </a>
                    <p class="product-price">80.00</p>

                    <div class="hover-content">
                      <div class="add-to-cart-btn">
                        <a href="#" class="btn essence-btn">
                          Sumar al Carro
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="single-product-wrapper">
                  <div class="product-img">
                    <img src="assets/img/product-img/product-3.jpg" alt="" />

                    <img
                      class="hover-img"
                      src="assets/img/product-img/product-4.jpg"
                      alt=""
                    />

                    <div class="product-badge offer-badge">
                      <span>-30%</span>
                    </div>

                    <div class="product-favourite">
                      <a href="#" class="favme fa fa-heart"></a>
                    </div>
                  </div>

                  <div class="product-description">
                    <span>Conch</span>
                    <a href="#">
                      <h6>Titanio</h6>
                    </a>
                    <p class="product-price">
                      <span class="old-price">75.00</span> 55.00
                    </p>

                    <div class="hover-content">
                      <div class="add-to-cart-btn">
                        <a href="#" class="btn essence-btn">
                          Sumar al Carro
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="single-product-wrapper">
                  <div class="product-img">
                    <img src="assets/img/product-img/product-4.jpg" alt="" />

                    <img
                      class="hover-img"
                      src="assets/img/product-img/product-5.jpg"
                      alt=""
                    />

                    <div class="product-badge new-badge">
                      <span>Nuevo</span>
                    </div>

                    <div class="product-favourite">
                      <a href="#" class="favme fa fa-heart"></a>
                    </div>
                  </div>

                  <div class="product-description">
                    <span>Titanio</span>
                    <a href="#">
                      <h6>Helix</h6>
                    </a>
                    <p class="product-price">30 Euros</p>

                    <div class="hover-content">
                      <div class="add-to-cart-btn">
                        <a href="#" class="btn essence-btn">
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
