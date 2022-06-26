import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      const foundToken = JSON.parse(localStorage.getItem("token"));
      if (foundToken) {
        navigate("/products");
      }
    }, 3000);
  }, [register]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      password: document.getElementById("password").value,
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      firstName: document.getElementById("name").value,
      lastname: document.getElementById("lastname").value,
    };
    register(user);
    alert("Usuario registrado correctamente");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <>
      <div className="d-lg-flex half">
        <div
          id="not-invert"
          className="bg order-2 order-md-1 portada-registro"
        ></div>
        <div className="contents order-1 order-md-2 ">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                <h3>
                  Registrate en <strong>Komorebi</strong>
                </h3>
                <p className="mb-4">
                  Date de alta y pertenece a esta exclusiva tienda de Piercings
                  con envio a toda España.
                </p>
                <form
                  className="form-register"
                  id="form"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group first">
                    <label for="name">Como te llamas?</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group second">
                    <label for="lastname">Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apellido"
                      id="lastname"
                      required
                    />
                  </div>
                  <div className="form-group third">
                    <label for="username">Nombre de usuario?</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre de usuario"
                      id="username"
                      required
                    />
                  </div>
                  <div className="form-group forth">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      id="email"
                      required
                    />
                  </div>
                  <div className="form-group fifth mb-3">
                    <label for="password">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Tu secretito"
                      id="password"
                      required
                    />
                  </div>
                  <div className="form-group last mb-3">
                    <label for="confirmed password">Repite tu contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Tu secretito 2.0"
                      id="confirmed-password"
                      required
                    />
                  </div>
                  <input
                    type="submit"
                    value="Sign up"
                    className="btn btn-block btn-primary"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
