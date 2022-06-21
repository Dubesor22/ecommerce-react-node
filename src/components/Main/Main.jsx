import React from "react";
import { Link } from "react-router-dom";
import LinkSecciones from "./Link/LinkSecciones";
import ProductWrapper from "./ProductWrapper/ProductWrapper";

export default function Main() {
  return (
    <div>
      <div className="cart-bg-overlay"></div>
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
            <LinkSecciones image="url(assets/img/bg-img/bg-2.jpg)" href="#" linkTitle="Tatuajes"/>
            <LinkSecciones image="url(assets/img/bg-img/bg-3.jpg)" href="#" linkTitle="Piercing"/>
            <LinkSecciones image="url(assets/img/bg-img/bg-4.jpg)" href="#" linkTitle="Microblading"/>
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
                <ProductWrapper image1="assets/img/product-img/product-1.jpg" image2="assets/img/product-img/product-2.jpg" href1="#" name="Disenyo oreja" href2="#" material="Plata de ley" price="80.00"/>
                <ProductWrapper image1="assets/img/product-img/product-2.jpg" image2="assets/img/product-img/product-3.jpg" href1="#" name="Trabus" href2="#" material="Oro" price="80.00"/>
                <ProductWrapper image1="assets/img/product-img/product-3.jpg" image2="assets/img/product-img/product-4.jpg" offer="30" href1="#" name="Conch" href2="#" material="Titanio" price="55.00"/>
                <ProductWrapper image1="assets/img/product-img/product-4.jpg" image2="assets/img/product-img/product-5.jpg" nuevo="true" href1="#" name="Titanio" href2="#" material="Helix" price="30.00"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}