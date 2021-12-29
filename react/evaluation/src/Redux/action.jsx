import { appComponet } from "./actionType"

export const listsucces = (payload) => {
    return{
        type : appComponet.LIST_SUCCESS,
        payload
    }
}

export const listrequest = (payload) => {
    return{
        type : appComponet.LIST_REQUEST,
        payload
    }
}
export const listfailure = (payload) => {
    return{
        type : appComponet.LIST_FAILURE,
        payload
    }
}
export const listadd = (payload) => {
    return{
        type : appComponet.LIST_ADD,
        payload
    }
}