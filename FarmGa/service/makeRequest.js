import axios from "axios"

const API = axios.create({
    baseURL: "http://172.20.3.11:3000"
})

export function makeRequest(url, options) {
    return API(url, options)
            .then(res => res.data)
            .catch(err => {
                return new Promise.reject(err)
            })
}