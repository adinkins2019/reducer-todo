import React from 'react'

const initialState = {

}

const reducer = (state, action) => {
    switch(action.type){
        case "ADDITEM":
            state = [...state, action.payload]
            return state
        
        default:
            return state;
    }
}