import React, {useRef} from "react";
import { Link } from "react-router-dom";
import LinkSecciones from "./Link/LinkSecciones";
import ProductWrapper from "./ProductWrapper/ProductWrapper";
import video1 from "../../assets/video/videoIntro.mp4";
import "./Main.css";
import useScrollSnap from 'react-use-scroll-snap';
// import arrow from "../../assets/img/downArrow.png";

export default function Main() {
  const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 30, delay: 0 });
  return (
    <div ref={scrollRef} id="main">
      {/* <section className="cart-bg-overlay"></section> */}
      <section className="container-video">
        {/* <div class="overlay">
          <a href="#primera">
            <img className="flecha" src={arrow} alt="flecha" />
          </a>
        </div> */}
        <div
          id="video_box"
          className="embed-responsive embed-responsive-16by9 container-video"
        >
          <video
            id="not-invert"
            className="embed-responsive-item video-intro"
            autoPlay
            loop
            muted
          >
            <source src={video1} type="video/mp4" />
          </video>
        </div>
      </section>
      <section
        id="not-invert"
        className="welcome_area bg-img background-overlay"
        style={{ backgroundImage: "url(assets/img/bg-img/bg-1.jpg)" }}
      >
        <div id="primera" className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="hero-content">
                <h6>Yolanda Lopez</h6>
                <h2>"Lo mas intimo de mi"</h2>
                <Link to="/products" className="btn essence-btn">
                  Ver Colección
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="top_catagory_area section-padding-80 clearfix">
        <div class="container">
          <div class="row justify-content-center" id="not-invert">
            <LinkSecciones
              image="url(assets/img/bg-img/bg-2.jpg)"
              href="#"
              linkTitle="Tatuajes"
            />
            <LinkSecciones
              image="url(assets/img/bg-img/bg-3.jpg)"
              href="/products"
              linkTitle="Piercing"
            />
            <LinkSecciones
              image="url(assets/img/bg-img/bg-4.jpg)"
              href="#"
              linkTitle="Microblading"
            />
          </div>
        </div>
      </section>
      <section class="cta-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                id="not-invert"
                class="cta-content bg-img background-overlay"
                style={{ backgroundImage: "url(assets/img/bg-img/bg-5.jpg)" }}
              >
                <div class="h-100 d-flex align-items-end pb-5 justify-content-end">
                  <div class="cta--text">
                    <h6>-60%</h6>
                    <h2>Lanzamiento</h2>
                    <Link to="/products" class="btn essence-btn">
                      Comprar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  name="Diseño oreja"
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
