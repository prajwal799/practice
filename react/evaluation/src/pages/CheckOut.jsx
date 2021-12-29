import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getData } from "./api";
import {Button} from "@mui/material"

const Checkout = () => {
    const [data , setData] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
          dispatch(getData()).then((res) => {
              setData(res)
          })
    },[])
    
    return(
        <>
        {
            data.map((item) => {
                <div key={item.id}>
            <div>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <div style={{display:"flex"}}>
          <Button  className="btn_add_minus">+</Button>
                <h4 style={{marginTop:"0px"}}>{item.count}</h4>
                <Button  className="btn_add_minus">-</Button>
          </div>
                </div>
 </div>
            })
        }
        
        </>
    )
}
export default Checkout;