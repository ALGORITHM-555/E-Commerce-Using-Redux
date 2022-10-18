import { combineReducers } from 'redux';
import amountReducer from './amountReducer';
import dataCounterRducer from './counterReducer';


const reducers = combineReducers({
    amount: amountReducer,
    counter: dataCounterRducer,
})

export default reducers;