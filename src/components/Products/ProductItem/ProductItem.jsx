import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

export default function ProductItem({product}) {
    const { addCart } = useContext(GlobalContext);
  return (
    <>
        <div className="card card-product container-sm">
            <div className="card-body" key={product.id}>
            <h3 className="card-title">{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <p className="card-text">{product.description}</p>
            <p className="card-text">{product.price} €</p>
            <div className="d-flex justify-content-around">
                <button onClick={() => addCart(product)} className="btn btn-primary text-white">Anadir al carro</button>
                <button className="btn btn-primary text-white">Detalles...</button>
            </div>
            </div>
        </div>

    </>
  )
}