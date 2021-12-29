import { Children, createContext } from "react";

export const addcontext = createContext();

const addContextProvide = ({Children}) => {
    const [list , setList] = [];
    return (
        <addcontext.Provider>{Children}</addcontext.Provider>
    )
}
export default addContextProvide;