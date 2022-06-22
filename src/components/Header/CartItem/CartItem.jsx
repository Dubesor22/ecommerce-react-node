import React from 'react'
import "./CartItem.css"
export default function CartItem({href, src, badge, item, size, color, price, i}) {
  return (
    <>
            <div className="single-cart-item" key={i}>
              <a href={href} className="product-image">
                <img
                  src={src}
                  className="cart-thumb"
                  alt=""
                />

                <div id="cartitem" className="cart-item-desc">
                  <span id="X" className="product-remove">
                    <i className="fa fa-close" aria-hidden="true"></i>
                  </span>
                  <span className="badge">{badge}</span>
                  <h6>{item}</h6>
                  <p className="size">Size: {size}</p>
                  <p className="color">Color: {color}</p>
                  <p className="price">{price}</p>
                </div>
              </a>
            </div>
    </>
  )
}