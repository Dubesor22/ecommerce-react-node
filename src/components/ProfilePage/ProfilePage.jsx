import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import "./ProfilePage.css";
export default function ProfilePage() {
  const { getUserInfo } = useContext(UserContext);
  const template = {
    id:0,
    username: "@SofiaLaProfe",
    name: "Sofia",
    email: "sofia@gmail.com",
    avatar:"https://uploads-ssl.webflow.com/60782404b8e195845053206a/620a0cbe2bd6e05c7fafbcec_foto1%20(2)-p-1080.jpeg"
  };
  const getUserInfo1 = getUserInfo.user ? getUserInfo.user : template;
  console.log(JSON.stringify(getUserInfo1));
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 thirty">
            <div className="portada_perfil"><img id="not-invert" src={getUserInfo1.avatar} alt="" /></div>
          </div>
          <div className="col-md-8 seventy">
            <h2>Tu Perfil</h2>
            <div className="row justify-content-around">
              <div>
                <input
                  type="text"
                  className="inputProfile"
                  placeholder="Username"
                  defaultValue={getUserInfo1.username}
                  id="username"
                  required
                />
              </div>
              <div></div>
            </div>
            <div className="row justify-content-around">
              <div>
                <input
                  type="text"
                  className="inputProfile"
                  placeholder="Nombre"
                  defaultValue={getUserInfo1.name}
                  id="name"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  className="inputProfile"
                  placeholder="Apellido"
                  defaultValue=""
                  id="surname"
                />
              </div>
            </div>
            <div className="row justify-content-around">
              <div>
                <input
                  type="password"
                  className="inputProfile"
                  placeholder="New password"
                  defaultValue=""
                  id="password"
                />
              </div>
              <div>
                <input
                  type="password"
                  className="inputProfile"
                  placeholder="Confirm new password"
                  defaultValue=""
                  id="confirmed-pasword"
                />
              </div>
            </div>
            <div className="row justify-content-around">
              <div>
                <input
                  type="email"
                  className="inputProfile"
                  placeholder="Email"
                  defaultValue={getUserInfo1.email}
                  id="email"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  className="inputProfile"
                  placeholder="Phone"
                  defaultValue=""
                  id="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                />
              </div>
            </div>
            <div className="row justify-content-around">
              <div>
                <input
                  type="text"
                  className="inputProfile"
                  placeholder="Address"
                  defaultValue=""
                  id="adress"
                />
              </div>
              <div></div>
            </div>
            <div className="row justify-content-around">
              <div>
                <input
                  type="text"
                  className="inputProfile"
                  placeholder="Ciudad"
                  defaultValue=""
                  id="name"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  className="inputProfile"
                  placeholder="Provincia"
                  defaultValue=""
                  id="surname"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="inputProfile"
                  placeholder="Código Postal"
                  defaultValue=""
                  id="surname"
                />
              </div>
            </div>
            <input
              type="submit"
              value="Guardar"
              className="btn btn-block btn-primary padding"
            />
          </div>
        </div>
      </div>
    </>
  );
}
