import { Route, Router, Routes } from "react-router-dom";
import Checkout from "../pages/CheckOut";
import Home from "../pages/Home";

const AllRoutes = () => {
    return(
        <>
        <Routes>
        
            <Route path="/home" element={<Home />}></Route>
            <Route path="/checkout" element={<Checkout />} ></Route>

        </Routes>
        </>
    )
}
export default AllRoutes;