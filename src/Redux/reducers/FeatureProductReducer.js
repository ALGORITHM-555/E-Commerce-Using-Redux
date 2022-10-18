import { FETCH_FEATURE_PRODUCT } from '../constants/constant';
const initialState = {
    Product: []         
}

const FeatureProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FEATURE_PRODUCT:             
           return {...state,Product:action.payload};            
        default:
            return state;
    }

}

export default FeatureProductsReducer;