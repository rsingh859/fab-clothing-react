import React from 'react';
//import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropDown = () =>{

    const {cartItems} = useSelector((state) => ({ cartItems: selectCartItems(state) }));

    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default CartDropDown;

// const mapStateToProps = ({ cart: {cartItems } }) =>({
//     cartItems
// });

// export default connect(mapStateToProps)(cartDropDown);