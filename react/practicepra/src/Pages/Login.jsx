import React, { createContext, useContext } from "react";
import {useSelector , useDispatch} from "react-redux";
import { AppContext } from "../Component/constestApi";
import { loginAuth } from "../redux/action";
const Login = () => {
  // const auth = useSelector((state) => state.login);
  // const dispatch = useDispatch();
  // const loginbtn = () => {
    
  //     dispatch(loginAuth(true));
  // }
  // console.log(auth);

  const [Auth , isAuth] = useContext(AppContext);
  console.log(Auth);
  const loginbtn = () => {
    isAuth(true);
  }
    return(
        <>
          <button onClick={loginbtn} >Login</button>
        </>
    )
}
export default Login