import { appComponet } from "./actionType"

const initState = {
    list : [],
    isLaoding : true , 
    isError : false
}
const  reduce = (state = initState , {payload,type}) => {
    
     switch(type){
        case appComponet.LIST_REQUEST : {
            return {
                ...state,
                isLaoding : true
            }
         }
        case appComponet.LIST_SUCCESS : {
           return {
               ...state,
               list : payload,
               isLaoding : false
           }
        }
        case appComponet.LIST_FAILURE : {
            return {
                ...state,
                isLaoding : false,
                isError : true
            }
         }
        default : 
            return state
        
     }

}

export default reduce