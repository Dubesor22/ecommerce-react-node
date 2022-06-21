import React from "react";
import { Link } from "react-router-dom";
import "./LinkSecciones.css";

export default function LinkP({ image, href, linkTitle }) {
  const style = {
    backgroundImage: image,
    backgroundSize: "100%"
  }
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4">
        <div style={style} className=" single_catagory_area d-flex align-items-center justify-content-center bg-img">
          <div className="catagory-content">
            <Link to={href}>{linkTitle}</Link>
          </div>
        </div>
      </div>
    </>
  );
}
