import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if(process.env.NODE_ENV==='development' || 'test') {
    middleware.push(logger);
}

//const redux_tool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);