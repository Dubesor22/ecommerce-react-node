import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Products.css";

const Products = () => {
  const { products, getProducts } = useContext(GlobalContext);
  useEffect(() => {
    getProducts();
  }, []);

  if (products.length <= 0) {
    return (
      <div class="spinner-border text-dark spin" role="status">
        <span class="sr-only">.</span>
      </div>
    );
  }

  const product = products.map((product) => {
    return (
      <div className="card card-product container-sm">
        <div class="card-body" key={product.id}>
          <h3 class="card-title">{product.name}</h3>
          <img src={product.image} alt={product.name} />
          <p class="card-text">{product.description}</p>
          <p class="card-text">{product.price} €</p>

          <a class="btn btn-primary" href={product.url}>
            Detalles...
          </a>
        </div>
      </div>
    );
  });

  return (
    <>
      <h2>Productos disponibles</h2>
      <div className="group">{product}</div>
    </>
  );
};

export default Products;
