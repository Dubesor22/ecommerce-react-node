import React from "react";
import { Link } from "react-router-dom";
import "./Link.css";

export default function LinkP({ image, href, linkTitle }) {
  console.log(image);
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4">
        <div
          className=" single_catagory_area d-flex align-items-center justify-content-center bg-img"
          // style="background-image:{image}"
        >
          <div className="catagory-content">
            <Link to={href}>{linkTitle}</Link>
          </div>
        </div>
      </div>
    </>
  );
}
