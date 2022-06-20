import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div class="d-lg-flex half">
        <div class="bg order-2 order-md-1 portada"></div>
        <div class="contents order-1 order-md-2 ">
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-7">
                <h3>
                  Entra en <strong>Komorebi</strong>
                </h3>
                <p class="mb-4">
                  Date de alta y pertenece a esta exclusiva tienda de Piercings
                  con envio a toda España.
                </p>
                <form action="#" method="post">
                  <div class="form-group first">
                    <label for="username">Como te llamas?</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="tu usuario"
                      id="username"
                    />
                  </div>
                  <div class="form-group last mb-3">
                    <label for="password">contraseña</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="tu secretito"
                      id="password"
                    />
                  </div>

                  <div class="d-flex mb-5 align-items-center">
                    <label class="control control--checkbox mb-0">
                      <span class="caption">Recuerdame</span>
                      <input type="checkbox" checked="checked" />
                      <div class="control__indicator"></div>
                    </label>
                    <span class="ml-auto">
                      <a href="#" class="forgot-pass">
                        Olvidaste Contraseña?
                      </a>
                    </span>
                  </div>

                  <input
                    type="submit"
                    value="Log In"
                    class="btn btn-block btn-primary"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
