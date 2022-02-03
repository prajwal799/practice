import { createContext, useState } from "react";


export const AppContext = createContext();

const ApplicationContext = ({children}) => {
    const [Auth,isAuth] = useState(false);
   return(
    <AppContext.Provider value={[Auth,isAuth]}>
    {children}
</AppContext.Provider>
   )
}
export default ApplicationContext