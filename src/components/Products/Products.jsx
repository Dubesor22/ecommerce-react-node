import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import ProductItem from "./ProductItem/ProductItem";
import "./Products.css";

export default function Products() {
  const { products, getProducts, cart } = useContext(GlobalContext);
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
      <ProductItem product={product}/>
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