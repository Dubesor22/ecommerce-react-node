import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Products.css";

export default function Products() {
  const { products, getProducts, addCart, cart } = useContext(GlobalContext);
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (products.length <= 0) {
    return (
      <div className="spinner-border text-dark spin" role="status">
        <span className="sr-only">.</span>
      </div>
    );
  }

  const product = products.map((product) => {
    return (
      <div className="card card-product container-sm">
        <div className="card-body" key={product.id}>
          <h3 className="card-title">{product.name}</h3>
          <img src={product.image} alt={product.name} />
          <p className="card-text">{product.description}</p>
          <p className="card-text">{product.price} €</p>
          <div className="btn-group">
            <button
              onClick={() => addCart(product)}
              className="btn-group btn btn-primary text-white"
            >
              Anadir al carro
            </button>
            <button className="btn btn-primary text-white">Detalles...</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="d-flex flex-column container-fluid heading">
        <h2 className="piercing-title">Todos los Piercings</h2>
        <p className="subtitle">
          Trabus, Aros, Septums, Conch, Helix, y muchos mas...
        </p>
      </div>
      <div className="container-fluid container-products">
        <div className="side-bar">
          <div className="side-bar-item">
            <h3>Categorias</h3>
            <ul className="list-group">
              <li className="list-group-item">
                <a href="#">Titanio</a>
              </li>
              <li className="list-group-item">
                <a href="#">Oro</a>
              </li>
              <li className="list-group-item">
                <a href="#">Acero</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="group">{product}</div>
      </div>
    </>
  );
}
