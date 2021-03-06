import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  function alert1() {
    alert("Jaja buena suerte, aquí no hacemos eso. Que la fuerza te acompañe.");
  }
  useEffect(() => {
    setTimeout(() => {
      const foundToken = JSON.parse(localStorage.getItem("token"));
      if (foundToken) {
        navigate("/products");
      }
    }, 2000);
  }, [login]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };
    login(user);
  };

  return (
    <>
      <div className="d-lg-flex half">
        <div id="not-invert" className="bg order-2 order-md-1 portada"></div>
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
                <form id="form" onSubmit={handleSubmit}>
                  <div className="form-group first">
                    <label for="username">Email</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email"
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
                    <label
                      id="not-invert"
                      className="control control--checkbox mb-0"
                    >
                      <span className="caption">Recuerdame</span>
                      <input type="checkbox" />
                      <div className="control__indicator"></div>
                    </label>
                    <span className="ml-auto">
                      <Link to="#" onClick={alert1} className="forgot-pass">
                        Olvidaste Contraseña?
                      </Link>
                    </span>
                  </div>

                  <input
                    type="submit"
                    value="Iniciar sesión"
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
