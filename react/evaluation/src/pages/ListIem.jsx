import { useState } from "react"

const ListItem = ({name,image,price}) => {
    const [iscount , setCount] = useState(0);
    return(
        <div style={{border:"1px solid black",display:"flex",width:"300px",height:"200px",margin:" 5px auto"}}>
            <div>
          <img src={image}  width="100px" height="100px"/>
            </div>
            <div>
          <p>{name}</p>
          <p>{price}</p>
          <div style={{display:"flex"}}>
          <button onClick={() => setCount(iscount+1)} className="btn_add_minus">+</button>
                <h4 style={{marginTop:"0px"}}>{iscount}</h4>
                <button onClick={() => setCount(iscount-1)}  className="btn_add_minus">-</button>
          </div>
            <button>ADD</button>
            </div>
        </div>
    )
}
export default ListItem