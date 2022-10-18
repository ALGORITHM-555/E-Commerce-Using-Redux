import { combineReducers } from "redux";
import FeatureProductsReducer from './FeatureProductReducer';


const reducers = combineReducers({
    featureProducts: FeatureProductsReducer
})

export default reducers;