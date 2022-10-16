import { FETCH_FEATURE_PRODUCT } from '../constants/constant';

export const FetchFeatureProducts = (ProductData) => {    
    return{        
        type: FETCH_FEATURE_PRODUCT,
        payload: ProductData,
    }
}