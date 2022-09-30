import { combineReducers } from 'redux';
import {productReducers, selectedproductReducers} from './productReducers';

const rootReducers = combineReducers({
    productReducers,
    selectedproductReducers
});

export default rootReducers;
