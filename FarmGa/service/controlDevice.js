import { makeRequest } from "./makeRequest"

export function sendControlSignal(data) {
    return makeRequest(`/control/activate`,{
        method: "post",
        data: data
    })
}