import React from 'react'

export default function ProductWrapper({image1, image2, nuevo, offer, href1, name, href2, material, price}) {
  return (
    <>
        <div className="single-product-wrapper">
                  <div className="product-img">
                    <img src={image1} alt="" />

                    <img
                      className="hover-img"
                      src={image2}
                      alt=""
                    />
                    {nuevo!=(""||null||undefined) ? (
                        <div className="product-badge new-badge">
                            <span>Nuevo</span>
                        </div>
                    ) : (
                       <></>
                    )}
                    {offer!=(""||null||undefined) ? (
                        <div className="product-badge offer-badge">
                            <span>-{offer}%</span>
                        </div>
                    ) : (
                       <></>
                    )}
                    <div className="product-favourite">
                      <a href={href1} className="favme fa fa-heart"></a>
                    </div>
                  </div>

                  <div className="product-description">
                    <span>{name}</span>
                    <a href={href2}>
                      <h6>{material}</h6>
                    </a>
                    <p className="product-price">$ {price}</p>

                    <div className="hover-content">
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Sumar al Carro
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}