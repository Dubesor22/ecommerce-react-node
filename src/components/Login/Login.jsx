import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login(){
  return (
    <>
      <div className="d-lg-flex half">
        <div className="bg order-2 order-md-1 portada"></div>
        <div className="contents order-1 order-md-2 ">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                <h3>
                  Entra en <strong>Komorebi</strong>
                </h3>
                <p className="mb-4">
                  Entra y pertenece a esta exclusiva tienda de Piercings
                  con envio a toda España.
                </p>
                <form action="#" method="post">
                  <div className="form-group first">
                    <label for="username">Como te llamas?</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="tu usuario"
                      id="username"
                      required
                    />
                  </div>
                  <div className="form-group last mb-3">
                    <label for="password">contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="tu secretito"
                      id="password"
                      required
                    />
                  </div>

                  <div className="d-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-0">
                      <span className="caption">Recuerdame</span>
                      <input type="checkbox" checked="checked" />
                      <div className="control__indicator"></div>
                    </label>
                    <span className="ml-auto">
                      <a href="#" className="forgot-pass">
                        Olvidaste Contraseña?
                      </a>
                    </span>
                  </div>

                  <input
                    type="submit"
                    value="Log In"
                    className="btn btn-block btn-primary"
                  />
                  <span className="ml-auto align-items-center">
                        ¿Todavía no eres miembro? <Link to="/register">Registrate aquí</Link>.
                    </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};