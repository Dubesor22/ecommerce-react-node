import { Link } from "react-router-dom";
import React from "react";

export default function Btnicon({ src, className, href, span, alternative }) {
  return (
    <>{span<=0?(
      <div className={className}>
        <Link to={href} id="essenceCartBtn">
          <div id="not-invert">
            <img src={src} alt={alternative} />
          </div>
        </Link>
      </div>
    ):(
      <div className={className}>
        <Link to={href} id="essenceCartBtn">
          <div id="not-invert">
            <img src={src} alt={alternative} /> <span>{span}</span>
          </div>
        </Link>
      </div>
      )
      }
      
    </>
  );
}
