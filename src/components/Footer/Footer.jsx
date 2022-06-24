import React from "react";
import Sociallink from "./Sociallink/Sociallink";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer_area clearfix" id="not-invert">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="single_widget_area d-flex mb-30">
                <div className="footer-logo mr-50">
                  <Link to="/main">Komorebi</Link>
                </div>

                <div className="footer_menu">
                  <ul>
                    <li>
                      <Link to="/products">Tienda</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contacto</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="single_widget_area mb-30">
                <ul className="footer_widget_menu">
                  <li>
                    <Link to="#">Estado del pedido</Link>
                  </li>
                  <li>
                    <Link to="#">Opciones de pago</Link>
                  </li>
                  <li>
                    <Link to="#">Envio</Link>
                  </li>
                  <li>
                    <Link to="#">Guias</Link>
                  </li>
                  <li>
                    <Link to="#">Privacidad</Link>
                  </li>
                  <li>
                    <Link to="#">Terminos de uso</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row align-items-end">
            <div className="col-12 col-md-6">
              <div className="single_widget_area">
                <div className="footer_heading mb-30">
                  <h6>Subscribete</h6>
                </div>
                <div className="subscribtion_form">
                  <form>
                    <input
                      type="email"
                      name="mail"
                      className="mail"
                      placeholder="Your email here"
                    />
                    <button type="button" className="submit">
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="single_widget_area">
                <div className="footer_social_area">
                  <Sociallink href="#" title="Facebook" icon={faFacebook} />
                  <Sociallink href="#" title="Instagram" icon={faInstagram} />
                  <Sociallink href="#" title="Twitter" icon={faTwitter} />
                  <Sociallink href="#" title="Pinterest" icon={faPinterest} />
                  <Sociallink href="#" title="YouTube" icon={faYoutube} />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <p>
                Copyright &copy; {year} All rights reserved | Made with{" 💖"}{" "}
                by{" "}
                <Link
                  to="https://github.com/Dubesor22/ecommerce-react-node"
                  target="_blank"
                >
                  David & Gabo
                </Link>
                , distributed by{" "}
                <Link to="#" target="_blank">
                  Komorebi
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
