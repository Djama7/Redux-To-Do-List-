import { ADDTASK,EDITTASK  } from "../Redux/ActionType"
export const addTask = (payload) => {
    return (
        {type:ADDTASK,payload}
    )
}
export const editTask = (payload) => {
    return (
        {type :EDITTASK,payload}
    )
}