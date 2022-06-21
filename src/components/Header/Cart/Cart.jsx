import React from 'react'
import CartItem from '../CartItem/CartItem'
import Btnicon from '../Btnicon/Btnicon'

export default function Cart(){
  return (
    <>
    <div className="right-side-cart-area cart-on">
              <div className="cart-button">
                <Btnicon className="cart-area" href="#" src="assets/img/core-img/bag.svg" alternative="iconoCart" span="3"/>
              </div>
      
              <div className="cart-content d-flex">
                <div className="cart-list">
                  <CartItem href="#" src="assets/img/product-img/product-1.jpg" badge="Acero" item="Button Through Strap Mini Dress" size="S" color="Red" price="45.00"/>
                  <CartItem href="#" src="assets/img/product-img/product-2.jpg" badge="Mango" item="Button Through Strap Mini Dress" size="S" color="Red" price="45.00"/>
                  <CartItem href="#" src="assets/img/product-img/product-3.jpg" badge="Mango" item="Button Through Strap Mini Dress" size="S" color="Red" price="45.00"/>
                </div>
      
                <div className="cart-amount-summary">
                  <h2>Summary</h2>
                  <ul className="summary-table">
                    <li>
                      <span>subtotal:</span> <span>$274.00</span>
                    </li>
                    <li>
                      <span>delivery:</span> <span>Free</span>
                    </li>
                    <li>
                      <span>discount:</span> <span>-15%</span>
                    </li>
                    <li>
                      <span>total:</span> <span>$232.00</span>
                    </li>
                  </ul>
                  <div className="checkout-btn mt-100">
                    <a href="#" className="btn essence-btn">
                      Finalizar Compra
                    </a>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}