import { ActionsTypes } from "../contants/action-types";

const initialState = {
    products : [{
        products : [{
            id: 1,
            title: 'Dipesh',
            category : 'programmer',
        }]
    }]
}



export const productReducer = (state , {type, payload}) => {
    switch (action.type) {
        case ActionsTypes.SET_PRODUCTS:
            return state;
    
        default:
            return state;
    }
}