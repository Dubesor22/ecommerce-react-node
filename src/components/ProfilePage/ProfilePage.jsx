import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContex/UserState";
import './ProfilePage.css';
export default function ProfilePage() {
    const { getUserInfo , register } = useContext(UserContext);
    const template = {username:"@SofiaLaProfe",name:"Sofia",email:"sofia@gmail.com" };
    const getUserInfo1= getUserInfo ? getUserInfo : template;
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-4 thirty">
                    <div id="not-invert" className="portada_perfil"></div>
                </div>
                <div className="col-md-8 seventy">
                    <h2>Tu Perfil</h2>
                    <div  className="row justify-content-around">
                        <div>
                            <input type="text" className="inputProfile" placeholder="Username" defaultValue={getUserInfo1.username} id="username" required/>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div  className="row justify-content-around">
                        <div>
                            <input type="text" className="inputProfile" placeholder="Nombre" defaultValue={getUserInfo1.name} id="name" required/>
                        </div>
                        <div>
                            <input type="text" className="inputProfile" placeholder="Apellido" defaultValue="" id="surname"/>
                        </div>
                    </div>
                    <div  className="row justify-content-around">
                        <div>
                            <input type="password" className="inputProfile" placeholder="New password" defaultValue="" id="password"/>
                        </div>
                        <div>
                            <input type="password" className="inputProfile" placeholder="Confirm new password" defaultValue="" id="confirmed-pasword"/>
                        </div>
                    </div>
                    <div  className="row justify-content-around">
                        <div>
                            <input type="email" className="inputProfile" placeholder="Email" defaultValue={getUserInfo1.email} id="email" required/>
                        </div>
                        <div>
                        <input type="tel" className="inputProfile" placeholder="Phone" defaultValue="" id="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                        </div>
                    </div>
                    <div  className="row justify-content-around">
                        <div>
                            <input type="text" className="inputProfile" placeholder="Address" defaultValue="" id="adress"/>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div  className="row justify-content-around">
                        <div>
                            <input type="text" className="inputProfile" placeholder="Ciudad" defaultValue="" id="name" required/>
                        </div>
                        <div>
                            <input type="text" className="inputProfile" placeholder="Provincia" defaultValue="" id="surname"/>
                        </div>
                        <div>
                            <input type="text" className="inputProfile" placeholder="Código Postal" defaultValue="" id="surname"/>
                        </div>
                        
                    </div>
                    <input type="submit" value="Guardar" className="btn btn-block btn-primary padding"/>
                </div>
            </div>
        </div>
    </>
  )
}