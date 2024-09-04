import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import bearerToken from "../../utils/bearerToken";

//const urlBase = 'https://e-commerce-api-v2.academlo.tech/api/v1';
const urlBase = 'https://ecomerce-bck-nd.onrender.com/api/v1'

const purchases = createSlice({
    name: 'purchases',
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
    const url = `${urlBase}/purchases`;
    axios.get(url, bearerToken())
        .then((answer) => dispatch(setPurchases(answer.data)))
        .catch(err => console.log(err))
};

export const postPurchases = () => (dispatch) => {
    const url = `${urlBase}/purchases`;
    axios.post(url, {}, bearerToken())
        .then((answer) => dispatch(addPurchase(answer.data)))
        .catch(err => console.log(err))
}