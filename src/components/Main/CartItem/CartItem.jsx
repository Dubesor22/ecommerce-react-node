import React from 'react'

export default function CartItem({href, src, badge, item, size, color, price}) {
  return (
    <>
            <div className="single-cart-item">
              <a href={href} className="product-image">
                <img
                  src={src}
                  className="cart-thumb"
                  alt=""
                />

                <div className="cart-item-desc">
                  <span className="product-remove">
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