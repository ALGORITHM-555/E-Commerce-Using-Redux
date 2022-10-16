import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducer/reducer';
import thunk from 'redux-thunk';


const store = createStore(reducers, {}, applyMiddleware(thunk));
// console.log(store.getState());
export default store;