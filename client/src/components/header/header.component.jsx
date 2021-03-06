import React from 'react';
import './header.styles.scss';
//import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';
import { signOutStart } from '../../redux/user/users.actions';

const Header = () => {

    const { currentUser, hidden } = useSelector(createStructuredSelector({ 
        currentUser: selectCurrentUser, 
        hidden: selectCartHidden
     }));

    const dispatch = useDispatch();

    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/shop'>
                    CONTACT
                </OptionLink>
                {
                    currentUser ? (
                    <OptionLink as='div' onClick={() => dispatch(signOutStart())} >SIGN OUT</OptionLink>
                    ) : (
                    <OptionLink to='/signin' >SIGN IN</OptionLink>
                    )
                }
                <CartIcon />
            </OptionsContainer>
            { hidden ? null : <CartDropdown />}
            
        </HeaderContainer>
    );
}

export default Header;

// const mapStateToProps = ({ user : { currentUser}, cart: { hidden } }) => ({
//     currentUser,
//     hidden
// });

// export default connect(mapStateToProps)(Header);