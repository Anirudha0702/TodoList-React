import React from 'react'

 const Reducer = (state,action) => {
    
    switch(action.type){
        case "ADD":
            return [...state,action.payload]
           break;
        case "REMOVE":
            let arr=[...state];
            arr.splice(action.payload,1);
            return arr;
            break;
        default:
            break;
    }
    
}
export default Reducer;