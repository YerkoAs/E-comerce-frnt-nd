import axios from "axios";
import { useState } from "react";

const urlBase = import.meta.env.VITE_API_URL


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