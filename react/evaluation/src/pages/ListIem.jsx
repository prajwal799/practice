import { useContext, useState } from "react"
import { useDispatch } from "react-redux";
import { addcontext } from "../component/AddContextapi";
import { addList } from "./api";
import {Button} from "@mui/material"

const ListItem = ({name,image,price}) => {
    const dispatch = useDispatch();
    const [iscount , setCount] = useState(0);

    const handleAdd = (name,price) => {
        
           dispatch(addList(name,price,iscount))
    }
    return(
        <div style={{border:"1px solid black",display:"flex",width:"300px",height:"200px",margin:" 5px auto"}}>
            <div>
          <img src={image}  width="100px" height="100px"/>
            </div>
            <div>
          <p>{name}</p>
          <p>{price}</p>
          <div style={{display:"flex"}}>
          <Button onClick={() => setCount(iscount+1)} className="btn_add_minus">+</Button>
                <h4 style={{marginTop:"0px"}}>{iscount}</h4>
                <Button onClick={() => setCount(iscount-1)}  className="btn_add_minus">-</Button>
          </div>
            <Button onClick={() => handleAdd(price,name)}>ADD</Button>
            </div>
        </div>
    )
}
export default ListItem