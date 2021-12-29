import { appComponet } from "./actionType"

const initState = {
    list : [],
    card : [],
    isLaoding : true , 
    isError : false
}
const  reduce = (state = initState , {payload,type}) => {
    
     switch(type){
         case appComponet.CARD_LIST : {
             console.log(payload);
             return{
                 ...state,
                 isLaoding :false,
                 list : payload
             }
         }
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