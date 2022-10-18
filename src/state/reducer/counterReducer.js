const intialState = 0;
const dataCounterReducer = (state = intialState, action) => {
    console.log(action);
    if (action.type === "INCREMENT") {
        return state + action.payload;
    } else if (action.type === "DECREMENT") {
        return state - action.payload;
    } else {
        return state;
    }

}

export default dataCounterReducer;