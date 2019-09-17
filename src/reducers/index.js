import { combineReducers } from 'redux';
import products from './products';
import itemEditing from './itemEditing';

// Combine Reducer
const appReducers = combineReducers ({
    products , 
    itemEditing
});

export default appReducers;