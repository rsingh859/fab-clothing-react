import CartActionTypes from './cart.action.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART
});

export const addItems = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const clearItems = (item) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});