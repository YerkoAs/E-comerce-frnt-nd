import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import bearerToken from "../../utils/bearerToken";

//const urlBase = 'https://e-commerce-api-v2.academlo.tech/api/v1';
const urlBase = import.meta.env.VITE_API_URL

const cart = createSlice({
    name: 'cart', 
    initialState: [],
    reducers: {
        setCart: (_state, action) => action.payload,
        //addCart: (state, {payload}) => [...state, payload]
        addCart: (state, {payload}) => {state.push(payload)},
        deleteCart: (state, { payload }) => {
            const index = state.findIndex(item => item.id === payload);
            if (index !== -1) {
                state.splice(index, 1); 
            }
        },
        upCart: (state, {payload}) => {
            const {id, quantity} = payload;
            return state.map((item) => item.id === id ? {...item, quantity} : item)
        }
    },
});

export const {setCart, addCart, deleteCart, upCart} = cart.actions;

export default cart.reducer;

const path = '/cart';

export const getCartProdsThunk = () => (dispatch) => {
    const url = `${urlBase}/${path}`;
    axios.get(url, bearerToken())
        .then(res => {
            dispatch(setCart(res.data))
            // console.log(res.data)
        })
        .catch((err) => console.log(err))
}


export const getOneProdIdThunk = (id) => (dispatch) => {
    const url = `${urlBase}/products/${id}`;
    axios.get(url)
        .then(res => {
            dispatch(setCart(res.data))
            // console.log(res.data)
        })
        .catch((err) => console.log(err))
}



export const postProductsThunk = (data) => (dispatch) => {
    const url = `${urlBase}/cart`;
    axios.post(url, data, bearerToken())
        .then(res => {
            dispatch(addCart(res.data));
            // console.log(res.data);
        })
        .catch(err => console.log(err))
}

export const deleteProductsThunk = (id) => (dispatch) => {
    const url = `${urlBase}/cart/${id}`;
    axios.delete(url, bearerToken())
        .then(() => {
            dispatch(deleteCart(id));
            console.log('Delete success');
        })
        .catch(err => console.log(err))
}

export const updateProductsThunk = (id, data) => (dispatch) => {
    const url = `${urlBase}/cart/${id}`;
    axios.put(url, data, bearerToken())
        .then((res) => {
            dispatch(upCart(res.data))
            console.log("update success")
        })
        .catch(err => console.log(err))
}