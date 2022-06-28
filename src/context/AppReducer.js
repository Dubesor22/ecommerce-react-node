export default function products(state, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_CART":
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "CLEAR_ONE_CART_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_ONLY_ONE_CART_ITEM":
      return {
        ...state,
        cart: state.cart,
      };
  }
}
