import { makeRequest } from "./makeRequest"

export function sendControlSignal(deviceKey, data) {
    return makeRequest(`/control/${deviceKey}`,{
        method: "post",
        data: data
    })
}