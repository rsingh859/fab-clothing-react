import React from 'react';
import './cart-icon.styles.scss';
//import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch,useSelector } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = () => {
    
    const {itemCount} = useSelector(createStructuredSelector({
        itemCount: selectCartItemsCount
    }));

    const dispatch = useDispatch();
    
    return(
    <div className='cart-icon' onClick={() => dispatch(toggleCartHidden()) }>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span> 
    </div>
    );    
};

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// });

//export default connect(null,mapDispatchToProps)(CartIcon);

export default CartIcon;