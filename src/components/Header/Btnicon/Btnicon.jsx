import { Link } from "react-router-dom";
import React from "react";

export default function Btnicon({ src, className, href, span, alternative }) {
  return (
    <>
      <div className={className}>
        <Link to={href} id="essenceCartBtn">
          <img src={src} alt={alternative} /> <span>{span}</span>
        </Link>
      </div>
    </>
  );
}
