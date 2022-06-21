import React, {
  useContext,
  useEffect,
  createNewOrder,
  createOrder,
} from "react";
import { GlobalContext } from "../../context/GlobalState";
import { OrdersContext } from "../../context/OrdersState";

const Cart = () => {
  const { cart, clearCart } = useContext(GlobalContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length <= 0) {
    return <span>No tienes ningún producto añadido</span>;
  }
  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
  };

  const cartItem = cart.map((cartItem, i) => {
    return (
      <div className="cart" key={i}>
        <h2>HOLA</h2>
        <span>{cartItem.name}</span>
        <span>{cartItem.price.toFixed(2)} €</span>
      </div>
    );
  });
  return (
    <div>
      {cartItem}
      <button className="btn btn-primary" onClick={() => clearCart()}>
        Vaciar Carrito
      </button>
      <button className="btn btn-primary" onClick={() => createNewOrder()}>
        Crear Nuevo Pedido
      </button>
    </div>
  );
};

export default Cart;
