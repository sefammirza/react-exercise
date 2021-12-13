import { ActionsTypes } from "../contants/action-types";


export const setProducts = (products) => {
    return {
        type: ActionsTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (products) => {
    return {
        type: ActionsTypes.SELECTED_PRODUCTS,
        payload: products,
    }
}