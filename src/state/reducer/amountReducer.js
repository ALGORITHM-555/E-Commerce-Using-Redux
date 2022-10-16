const intialState = 0;
const amountReducer = (state = intialState,action) =>{    
    if(action.type === 'deposit'){       
        return state + action.payload;
    }else if(action.type === 'withdraw'){
        if(state === 0){
            return state = intialState;
        }
        return state - action.payload;
    }else{
        return state;
    }
}
export default amountReducer;