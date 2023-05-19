import React from 'react'

 const Reducer = (state,action) => {
    let arr;
    switch(action.type){

        case "ADD":
            arr=[...state,action.payload];
        break;
        case "REMOVE":
            arr= [...state.slice(0,action.payload),...state.slice(action.payload+1)]
            break;
        default:
            arr=[...state];
            break;
    }
    localStorage.setItem("Tasks",JSON.stringify(arr));
    return arr;
}
export default Reducer;