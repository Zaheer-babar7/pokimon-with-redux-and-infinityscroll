import { createStore, compose, applyMiddleware } from 'redux'
import rootReducers from './reducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =  createStore(
    rootReducers, 
    composeEnhancers(applyMiddleware(thunk))
    );

export default store;