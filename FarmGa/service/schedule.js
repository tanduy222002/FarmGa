import { makeRequest } from "./makeRequest";

export function createNewSchedule(data){
    return makeRequest('/schedule/create', {
        method: "post",
        data: data
    })
}

export function updateScheduleDevice(data) {
    return makeRequest('/schedule/device', {
        method: "post",
        data: data
    })
}