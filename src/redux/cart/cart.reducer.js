import CartActionTypes from './cart.action.types';
import { addItemsToCart, removeItems } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden
            };

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItems(state.cartItems, action.payload)
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload)
            };
        default:
            return state;
    }
}

export default CartReducer;