import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
//import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = () => {

    const { currentUser, hidden } = useSelector(createStructuredSelector({ 
        currentUser: selectCurrentUser, 
        hidden: selectCartHidden
     }));

    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ? (
                    <div className='option' onClick={() => auth.signOut()} >SIGN OUT</div>
                    ) : (
                    <Link className='option' to='/signin' >SIGN IN</Link>
                    )
                }
                <CartIcon />
            </div>
            { hidden ? null : <CartDropdown />}
            
        </div>
    );
}

export default Header;

// const mapStateToProps = ({ user : { currentUser}, cart: { hidden } }) => ({
//     currentUser,
//     hidden
// });

// export default connect(mapStateToProps)(Header);