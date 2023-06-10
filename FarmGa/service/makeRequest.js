import axios from "axios"
import { REACT_APP_LOCALHOST } from "../constance"

const API = axios.create({
    baseURL: REACT_APP_LOCALHOST
})

export function makeRequest(url, option) {
    return API(url, option).then(res => res.data).catch(err => console.log(err))
}
