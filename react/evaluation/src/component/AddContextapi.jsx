import { Children, createContext, useState } from "react";

export const Addcontext = createContext();

const AddContextProvide = ({Children}) => {
    const [listitem , setListItem] = useState([]);
    return (
        <Addcontext.Provider value={[listitem , setListItem]}>{Children}</Addcontext.Provider>
    )
}
export default AddContextProvide;