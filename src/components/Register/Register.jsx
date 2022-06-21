import React from "react";
// import { Link } from "react-router-dom";
import "./Register.css";

export default function Register(){
  return (
    <>
      <div className="d-lg-flex half">
        <div className="bg order-2 order-md-1 portada-registro"></div>
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
                <form action="#" method="post">
                  <div className="form-group first">
                    <label for="name">Como te llamas?</label>
                    <input type="text" className="form-control" placeholder="Nombre" id="name" required/>
                  </div>
                  <div className="form-group second">
                    <label for="username">Nombre de usuario?</label>
                    <input type="text" className="form-control" placeholder="Nombre de usuario" id="username" required/>
                  </div>
                  <div className="form-group third">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" placeholder="Email" id="email" required/>
                  </div>
                  <div className="form-group forth mb-3">
                    <label for="password">Contraseña</label>
                    <input type="password" className="form-control" placeholder="Tu secretito" id="password" required/>
                  </div>
                  <div className="form-group last mb-3">
                    <label for="confirmed password">Repite tu contraseña</label>
                    <input type="password" className="form-control" placeholder="Tu secretito 2.0" id="confirmed password" required/>
                  </div>
                  <input type="submit" value="Sign up" className="btn btn-block btn-primary"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};