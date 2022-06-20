import React from "react";
import Sociallink from "./Sociallink/Sociallink";
import { faFacebook, faInstagram, faTwitter, faPinterest, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {

  const year =  new Date().getFullYear();
  return (
    <>
      <footer class="footer_area clearfix">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="single_widget_area d-flex mb-30">
                <div class="footer-logo mr-50">
                  <a href="#">Komorebi</a>
                </div>

                <div class="footer_menu">
                  <ul>
                    <li>
                      <a href="#">Tienda</a>
                    </li>
                    <li>
                      <a href="#">Contacto</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="single_widget_area mb-30">
                <ul class="footer_widget_menu">
                  <li>
                    <a href="#">Estado del pedido</a>
                  </li>
                  <li>
                    <a href="#">Opciones de pago</a>
                  </li>
                  <li>
                    <a href="#">Envio</a>
                  </li>
                  <li>
                    <a href="#">Guias</a>
                  </li>
                  <li>
                    <a href="#">Privacidad</a>
                  </li>
                  <li>
                    <a href="#">Terminos de uso</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row align-items-end">
            <div class="col-12 col-md-6">
              <div class="single_widget_area">
                <div class="footer_heading mb-30">
                  <h6>Subscribete</h6>
                </div>
                <div class="subscribtion_form">
                  <form>
                    <input
                      type="email"
                      name="mail"
                      class="mail"
                      placeholder="Your email here"
                    />
                    <button type="button" class="submit">
                      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="single_widget_area">
                <div class="footer_social_area">
                  <Sociallink
                    href="#"
                    title="Facebook"
                    icon={faFacebook}
                  />
                  <Sociallink
                    href="#"
                    title="Instagram"
                    icon={faInstagram}
                  />
                  <Sociallink
                    href="#"
                    title="Twitter"
                    icon={faTwitter}
                  />
                  <Sociallink
                    href="#"
                    title="Pinterest"
                    icon={faPinterest}
                  />
                  <Sociallink
                    href="#"
                    title="YouTube"
                    icon={faYoutube}
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-md-12 text-center">
              <p>
                Copyright &copy; {year} All rights reserved | Made with{" 💖"} by{" "}
                <a href="https://github.com/Dubesor22/ecommerce-react-node" target="_blank">
                  David & Gabo
                </a>
                , distributed by{" "}
                <a href="#" target="_blank">
                  Komorebi
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
