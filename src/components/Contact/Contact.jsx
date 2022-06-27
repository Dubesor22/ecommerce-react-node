import React from "react";
import "./Contact.css";
import logo1 from "../../assets/img/logo-yoli.jpg";

const Contact = () => {
  return (
    <>
      <div className="container contact-form">
        <div className="contact-image">
          <img src={logo1} alt="Logo Yoli-Piercing" />
        </div>
        <form method="post">
          <h3>Estamos para ayudarte</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="txtName"
                  className="form-control"
                  placeholder="Tu Nombre *"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  className="form-control"
                  placeholder="Tu Email *"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  className="form-control"
                  placeholder="Tu Telefono *"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  name="btnSubmit"
                  className="btnContact"
                  value="Enviar"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="text"
                  className="form-control area-text"
                  placeholder="Que necesitas? *"
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
