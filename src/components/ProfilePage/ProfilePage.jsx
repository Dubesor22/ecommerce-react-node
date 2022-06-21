import React from 'react'
import './ProfilePage.css';
export default function ProfilePage() {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-4 thirty">
                    <div className="portada_perfil"></div>
                </div>
                <div className="col-md-8 seventy">
                    <h2>Tu Perfil</h2>
                    <div  className="row justify-content-around">
                        <div>
                            <input
                            type="text"
                            className="inputProfile"
                            placeholder="Username"
                            value="@SofiLaProfe"
                            id="username"
                            required
                            />
                        </div>
                        <div>
                        </div>
                    </div>
                    <div  className="row justify-content-around">
                        <div>
                            <input
                            type="text"
                            className="inputProfile"
                            placeholder="Nombre"
                            value="Sofía"
                            id="name"
                            required
                            />
                        </div>
                        <div>
                            <input
                            type="text"
                            className="inputProfile"
                            placeholder="Apellido"
                            value=""
                            id="surname"
                            />
                        </div>
                    </div>
                    <div  className="row justify-content-around">
                        <div>
                            <input
                            type="password"
                            className="inputProfile"
                            placeholder="New password"
                            value=""
                            id="password"
                            />
                        </div>
                        <div>
                            <input
                            type="password"
                            className="inputProfile"
                            placeholder="Confirm new password"
                            value=""
                            id="confirmed-pasword"
                            />
                        </div>
                    </div>
                    <div  className="row justify-content-around">
                        <div>
                            <input
                            type="email"
                            className="inputProfile"
                            placeholder="Email"
                            value="sofia@gmail.com"
                            id="email"
                            required
                            />
                        </div>
                        <div>
                        <input
                            type="tel"
                            className="inputProfile"
                            placeholder="Phone"
                            value=""
                            id="tel"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            />
                        </div>
                    </div>
                    <div  className="row justify-content-around">
                        <div>
                            <input
                            type="text"
                            className="inputProfile"
                            placeholder="Address"
                            value=""
                            id="adress"
                            />
                        </div>
                        <div>
                        </div>
                    </div>
                    <div  className="row justify-content-around">
                        <div>
                            <input
                            type="text"
                            className="inputProfile"
                            placeholder="Ciudad"
                            value=""
                            id="name"
                            required
                            />
                        </div>
                        <div>
                            <input
                            type="text"
                            className="inputProfile"
                            placeholder="Provincia"
                            value=""
                            id="surname"
                            />
                        </div>
                        <div>
                            <input
                            type="text"
                            className="inputProfile"
                            placeholder="Código Postal"
                            value=""
                            id="surname"
                            />
                        </div>
                        
                    </div>
                    <input
                    type="submit"
                    value="Guardar"
                    className="btn btn-block btn-primary"
                  />
                </div>
            </div>
        </div>
    </>
  )
}