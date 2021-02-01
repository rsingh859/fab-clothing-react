import {GlobalStyle} from './global.styles';
import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/users.actions';

import Header from './components/header/header.component';

import Spinner from './components/spinner/spinner.components';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop-page/shop-page.components'));
const SignInSignUp = lazy(() => import('./pages/sign-in-sign-up/sign-in-sign-up.component'));
const Checkout = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ checkUserSession, currentUser }) => {  
  
  useEffect(() => {
    checkUserSession();
  },[checkUserSession]);

    return (
      <div>
      <GlobalStyle />      
      <Header />
          <Switch>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/signin' render={() => currentUser ? <Redirect to='/' /> : <SignInSignUp />} />
              <Route path = '/checkout' component={Checkout} />            
            </Suspense>
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
