import { appComponent } from "./actionType"

const initState = {
    login : false
}

export const reduces = (state = initState , {payload , type}) => {
      switch(type){
          case appComponent.LOGIN_AUTH : {
              return {
                  ...state,
                  login : payload
                 }
          }
          default : {
              return state
          }
      }
}