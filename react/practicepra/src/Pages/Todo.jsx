import { createContext, useContext } from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import { AppContext } from "../Component/constestApi";
const Todo = () => {
    // const login = useSelector((state) => state.login);
    const [Auth , isAuth] = useContext(AppContext);
    return Auth ? (
        <>
        Todo
        </>
    ) : <Navigate to="/" ></Navigate>
}
export default Todo;