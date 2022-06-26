import React, {  useEffect , useContext , useState} from "react";
import { UserContext } from "../../context/UserContext/UserState";
import "./ProfilePage.css";

export default function ProfilePage() {
  const { user , getUserInfo, updateUserInfo } = useContext(UserContext);
  useEffect(() => {
    getUserInfo();
  }, []);
  if (!user) {
    return <span>Cargando...</span>;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const password= document.getElementById("password").value;
    let user = {}
    if(password == "" ){
          user = {
          username: document.getElementById("username").value.substring(1),
          email: document.getElementById("email").value,
          firstName: document.getElementById("name").value,
          lastname: document.getElementById("lastname").value,
          // gender: document.getElementById("gender").value,
          avatar: document.getElementById("profilepic").value,
          birthDate: document.getElementById("birthdate").value
        }
    }else{
        user = {
        password: password,
        username: document.getElementById("username").value.substring(1),
        email: document.getElementById("email").value,
        firstName: document.getElementById("name").value,
        lastname: document.getElementById("lastname").value,
        // gender: document.getElementById("gender").value,
        avatar: document.getElementById("profilepic").value,
        birthDate: document.getElementById("birthdate").value
      }
    }
    updateUserInfo(user);
    alert("Usuario actualizado correctamente");
  };
  return (
    <>
      <div className="container">
      <form className="form-update" id="form-update" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4 thirty">
            <div className="portada_perfil"><img id="not-invert" src={user.avatar} alt="" /></div>
           <div id="profilepicDiv">
           <label>Profile picture</label>
           <input
                  type="text"
                  className="inputProfile"
                  placeholder="Change profile image (add URL)"
                  defaultValue={user.avatar}
                  id="profilepic"
                /></div>
          </div>
          <div className="col-md-8 seventy">
            <h2>Tu Perfil</h2>
            <div className="row justify-content-around">
              <div id="birthdateDiv">
              <label>Nombre de usuario</label>
                <input
                  type="text"
                  className="inputProfile"
                  placeholder="Username"
                  defaultValue={"@"+user.username}
                  id="username"
                  required
                />
              </div>
              <div></div>
            </div>
            <div className="row justify-content-around">
              <div id="birthdateDiv">
              <label>Nombre</label>
                <input
                  type="text"
                  className="inputProfile"
                  placeholder="Nombre"
                  defaultValue={user.firstname}
                  id="name"
                  required
                />
              </div>
              <div id="birthdateDiv">
                <label>Apellido</label>
                <input
                  type="text"
                  className="inputProfile"
                  placeholder="Apellido"
                  defaultValue={user.lastname}
                  id="lastname"
                />
              </div>
            </div>
            <div className="row justify-content-around">
              <div id="birthdateDiv">
              <label>New password</label>
                <input
                  type="password"
                  className="inputProfile"
                  placeholder="New password"
                  defaultValue=""
                  id="password"
                />
              </div>
              <div id="birthdateDiv">
              <label>Repeat new password</label>
                <input
                  type="password"
                  className="inputProfile"
                  placeholder="Confirm new password"
                  defaultValue=""
                  id="confirmed_pasword"
                />
              </div>
            </div>
            <div className="row justify-content-around">
              <div id="birthdateDiv">
              <label>Email</label>
                <input
                  type="email"
                  className="inputProfile"
                  placeholder="Email"
                  defaultValue={user.email}
                  id="email"
                  required
                />
              </div>
              <div id="birthdateDiv">
                <label>Birthdate</label>
                <input
                  type="text"
                  className="inputProfile"
                  placeholder="Birth date (yyyy/mm/dd)"
                  defaultValue={JSON.stringify(user.birthDate).substring(1,11)}
                  id="birthdate"
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
       </form>
      </div>
    </>
  );
}
