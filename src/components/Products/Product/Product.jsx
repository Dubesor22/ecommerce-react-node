import React, { useContext, useEffect } from "react";
import "./Product.css";
import { GlobalContext } from "../../../context/GlobalState";

const Product = ({ product }) => {
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

  return (
    <>
      <div class="container">
        <div class="row m-0">
          <div class="col-lg-7 pb-5 pe-lg-5">
            <div class="row">
              <div class="col-10 p-3 ml-3">
                <img
                  src="https://cdn.crazy-factory.com/images/product_images_2010/BC/BC/modelshots/BC_MS_F_2_LL.JPG?dt=1626256958"
                  alt=""
                />
              </div>
              <div class="row ml-0 bg-light">
                <div class="col-md-4 col-6 ps-30 pe-0 my-4">
                  <p class="text-muted">Categoria</p>
                  <p class="h5">Helix</p>
                </div>
                <div class="col-md-4 col-6  ps-30 my-4">
                  <p class="text-muted">Material</p>
                  <p class="h5 m-0">Acero</p>
                </div>
                <div class="col-md-4 col-6 ps-30 my-4">
                  <p class="text-muted">Zonas</p>
                  <p class="h5 m-0">Oreja</p>
                </div>
                <div class="col-md-4 col-6 ps-30 my-4">
                  <p class="text-muted">Diametro</p>
                  <p class="h5 m-0">16mm</p>
                </div>
                <div class="col-md-4 col-6 ps-30 my-4">
                  <p class="text-muted">Color</p>
                  <p class="h5 m-0">Metal</p>
                </div>
                <div class="col-md-4 col-6 ps-30 my-4">
                  <p class="text-muted">Bola</p>
                  <p class="h5 m-0">si</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3 col-lg-5 p-0 ps-lg-4">
            <div class="row m-0">
              <div class="col-12 px-4">
                <div class="d-flex align-items-end mt-4 mb-2">
                  <p class="h4 m-0 ">
                    <span class="pe-1">BALL CLOSURE RING</span>
                  </p>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <p class="textmuted">Cantidad</p>
                  <p class="fs-14 fw-bold">1</p>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <p class="textmuted">Subtotal</p>
                  <p class="fs-14 fw-bold">
                    <span class="fas fa-dollar-sign pe-1"></span>1,450
                  </p>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <p class="textmuted">Envio</p>
                  <p class="fs-14 fw-bold">Gratis</p>
                </div>
                <div class="d-flex justify-content-between mb-3">
                  <p class="textmuted fw-bold">Total</p>
                  <div class="d-flex align-text-top ">
                    <span class="fas fa-dollar-sign mt-1 pe-1 fs-14 "></span>
                    <span class="h4">1,350</span>
                  </div>
                </div>
              </div>
              <div class="col-12 px-0">
                <div class="row bg-light m-0 d-flex flex-column">
                  <div class="col-12 px-4 my-4">
                    <p class="fw-bold">Selecciona tu Opcion:</p>
                  </div>

                  <div class="row m-0">
                    <div class="col-12  mb-4 p-0">
                      <div class="btn btn-primary text-white ">Favoritos</div>
                    </div>
                  </div>
                  <div class="row m-0">
                    <div class="col-12  mb-4 p-0">
                      <button
                        onClick={() => addCart(product)}
                        className="btn btn-primary text-white "
                      >
                        Anadir al carro
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
