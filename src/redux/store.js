import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const middleware = [thunk];

if(process.env.NODE_ENV==='development' || 'test') {
    middleware.push(logger);
}

const redux_tool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

export const persistor = persistStore(store);