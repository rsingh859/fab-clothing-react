import React from 'react';
//import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropDown = () =>{

    const dispatch = useDispatch();

    const {cartItems} = useSelector(createStructuredSelector({ cartItems: selectCartItems}));
    const history = useHistory();

    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                }
            </div>
            <CustomButton onClick = {() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default CartDropDown;

// const mapStateToProps = ({ cart: {cartItems } }) =>({
//     cartItems
// });

// export default connect(mapStateToProps)(cartDropDown);