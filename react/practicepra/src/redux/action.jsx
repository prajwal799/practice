import { appComponent } from "./actionType";


export const loginAuth = (payload)  => {
    return {
        type : appComponent.LOGIN_AUTH,
        payload
    }
}