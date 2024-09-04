import axios from "axios";
import { useState } from "react";

//const urlBase = 'https://e-commerce-api-v2.academlo.tech/api/v1';
const urlBase = 'https://ecomerce-bck-nd.onrender.com/api/v1'


const useFetch = () => {
    const [apiData, setApiData] = useState();

    const getApi = (path) => {
        const url = `${urlBase}/${path}`;
        axios.get(url)
            .then((answer) => setApiData(answer.data))
            .catch((err) => console.log(err))
    }

    return [apiData, getApi];
}

export default useFetch