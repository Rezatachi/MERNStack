import * as actionsTypes from "../constants/cartConstants";

// set default state
export const cartReducer = (state = { cartItems: [] }, action) => {
  // Check action type
  switch (action.type) {
    case actionsTypes.ADD_TO_CART:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);
      // If we find that item already in the array, we will just return that item
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionsTypes.REMOVE_FROM_CART:
      return {
        ...state,
        // Filter through each item. If the item doesn't equal the action.payload. We will just send the id. Add every to the new array except the product that was chosen to be removed
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
