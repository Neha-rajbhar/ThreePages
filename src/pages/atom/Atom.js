import { atom } from "recoil";

export const todo= atom({
    key:"todo",
    default:[],
})

export const submit=atom({
    key:"submit",
    default:false,
})