import React from 'react';
import './checkout.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartTotal, selectCartItems } from '../../redux/cart/cart.selectors';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {

    const {cartItems} = useSelector(createStructuredSelector({ cartItems : selectCartItems}));
    const {cartTotal} = useSelector(createStructuredSelector({ cartTotal : selectCartTotal}));

    return(
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>product</span>
                </div>
                <div className='header-block'>
                    <span>description</span>
                </div>
                <div className='header-block'>
                    <span>quantity</span>
                </div>
                <div className='header-block'>
                    <span>price</span>
                </div>
                <div className='header-block'>
                    <span>remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }

            <div className='total'>TOTAL : ${cartTotal}</div>
        </div>
    );
}

export default Checkout;