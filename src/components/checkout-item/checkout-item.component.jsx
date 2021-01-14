import React from 'react';
import { useDispatch } from 'react-redux';
import './checkout-item.styles.scss';
import { clearItems } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const { name, imageUrl, price, quantity } = cartItem;
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>${price}</span>
        <div className='remove-button' onClick={() => dispatch(clearItems(cartItem))}>&#10005;</div>
    </div>
)}

export default CheckoutItem;