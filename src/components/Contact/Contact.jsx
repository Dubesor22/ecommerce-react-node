import React from "react";
import "./Contact.css";
import logo1 from "../../assets/img/logo-yoli.jpg";

const Contact = () => {
  return (
    <>
      <div class="container contact-form">
        <div class="contact-image">
          <img src={logo1} alt="Logo Yoli-Piercing" />
        </div>
        <form method="post">
          <h3>Estamos para ayudarte</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  name="txtName"
                  class="form-control"
                  placeholder="  Tu Nombre *"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  class="form-control"
                  placeholder="  Tu Email *"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  class="form-control"
                  placeholder="  Tu Telefono *"
                />
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  name="btnSubmit"
                  class="btnContact"
                  value="Enviar"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <textarea
                  name="text"
                  class="form-control area-text"
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
