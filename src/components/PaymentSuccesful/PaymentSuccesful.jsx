import React from 'react'
import "./PaymentSuccesful.css"
export default function PaymentSuccesful() {
  return (
    <div className='PaymentSuccesful'>
        <h1>¡Gracias por tu pedido!</h1>
        <p>
            Continuamos trabajando para ofrecerte los mejores servicios. Cualquier cosa envien email a
            <a id="PaymentSuccesful" href="mailto:orders@example.com"> orders@example.com</a>.
        </p>
    </div>
  )
}
