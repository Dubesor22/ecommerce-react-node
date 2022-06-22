import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContex/UserState";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  // const form = document.getElementById('form');
  // form.onsubmit = submit;
  const { login } = useContext(UserContext);
  const navigate = useNavigate()
  // function submit(event) {
  //   event.preventDefault();
  //   navigate("/products")
  // }
function alert1(){
  alert('Estás jodido, aquí no hacemos eso.');
}
  useEffect(() => {
      setTimeout(() => {
        const foundToken = JSON.parse(localStorage.getItem("token"));
        if (foundToken) {
        navigate("/products")
      }
      },2000)
 
  }, [login])
  return (
    <>
      <div className="d-lg-flex half">
        <div className="bg order-2 order-md-1 portada"></div>
        <div className="contents order-1 order-md-2 ">
          <div className="container ">
            <div className="row align-items-center justify-content-center pb-5 ">
              <div className="col-md-7">
                <h3>
                  Entra en <strong>Komorebi</strong>
                </h3>
                <p className="mb-4">
                  Entra y pertenece a esta exclusiva tienda de Piercings con
                  envio a toda España.
                </p>
                <form id="form" action="#" method="post">
                  <div className="form-group first">
                    <label for="username">¿Como te llamas?</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Tu usuario"
                      id="username"
                      required
                    />
                  </div>
                  <div className="form-group last mb-3">
                    <label for="password">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Tu secretito"
                      id="password"
                      required
                    />
                  </div>

                  <div className="d-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-0">
                      <span className="caption">Recuerdame</span>
                      <input type="checkbox" />
                      <div className="control__indicator"></div>
                    </label>
                    <span className="ml-auto">
                      <a onClick={alert1} className="forgot-pass">
                        Olvidaste Contraseña?
                      </a>
                    </span>
                  </div>

                  <input
                    type="submit"
                    value="Log In"
                    className="btn btn-block btn-primary"
                  />
                  <div className="container ">
                    <span className="ml-auto align-items-center">
                      ¿Todavía no eres miembro?{" "}
                      <Link to="/register">Registrate aquí</Link>.
                      <br />
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}