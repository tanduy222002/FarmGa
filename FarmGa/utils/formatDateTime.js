export function getScheduleTime(date) {
    return `${date.getHours()}:${date.getMinutes()}`  
}

export function getScheduleDate(date) {
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`  
}