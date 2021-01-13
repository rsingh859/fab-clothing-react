import CartActionTypes from './cart.action.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART
});

export const addItems = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})