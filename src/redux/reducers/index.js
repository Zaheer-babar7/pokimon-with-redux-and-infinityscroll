import { combineReducers } from 'redux';
import {pokimonReducers, selectedPokimonReducers} from './pokimonReducers';

const rootReducers = combineReducers({
    pokimonReducers,
    selectedPokimonReducers
});

export default rootReducers;
