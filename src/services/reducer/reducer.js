import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

const initialState = [];

export default function cardItems(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const addItem = state.find(item => item.cartData.id === action.data.id);
      if (!addItem) {
        return [...state, { cartData: action.data }];
      }
      return state;

    case REMOVE_TO_CART:
      return state.filter(item => item.cartData.id != action.data.id);

    default:
      return state;
  }
}
