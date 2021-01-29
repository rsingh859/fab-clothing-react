import './App.css';
import React, { useEffect } from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop-page/shop-page.components';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import Checkout from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/users.actions';

const App = ({ checkUserSession, currentUser }) => {  
  
  useEffect(() => {
    checkUserSession();
  },[checkUserSession]);

    return (
      <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={() => currentUser ? <Redirect to='/' /> : <SignInSignUp />} />
        <Route path = '/checkout' component={Checkout} />
      </Switch>
      </div>
    );
  } 

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
}); 

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
