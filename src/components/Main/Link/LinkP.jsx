import React from 'react'
import { Link } from "react-router-dom";

export default function LinkP({image, href, linkTitle}) {
  return (
    <>
        <div className="col-12 col-sm-6 col-md-4">
              <div
                className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                style={{ backgroundImage: {image} }}
              >
                <div className="catagory-content">
                  <Link to={href}>{linkTitle}</Link>
                </div>
              </div>
            </div>
    </>
  )
}