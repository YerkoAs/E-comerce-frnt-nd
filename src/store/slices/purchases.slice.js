import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import bearerToken from "../../utils/bearerToken";

const urlBase = import.meta.env.VITE_API_URL

const purchases = createSlice({
    name: 'purchase',
    initialState: [],
    reducers: {
        setPurchases: (_state, {payload}) => payload,
        // addPurchase: (state, {payload}) => [...state, payload],
        addPurchase: (state, {payload}) => state.push(payload),
    }
})

export const { setPurchases, addPurchase } = purchases.actions;

export default purchases.reducer;

export const getPurchasesThunk = () => (dispatch) => {
    const url = `${urlBase}/purchase`;
    axios.get(url, bearerToken())
        .then((answer) => dispatch(setPurchases(answer.data)))
        .catch(err => console.log(err))
};

export const postPurchases = () => (dispatch, getState) => {
    const cartItems = getState().cartSlice;
    const url = `${urlBase}/purchase`;
    
    return axios.post(url, cartItems, bearerToken()) 
        .then((answer) => {
            dispatch(addPurchase(answer.data));
            dispatch(setCart([])); 
        })
        .catch(err => console.log(err));
};
