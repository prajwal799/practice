import React from "react"
import { render } from "react-dom"
import data from "../db.json"
import ListItem from "./ListIem"

export default class Home extends React.Component{
    
    render(){

        return(
            <>
            home
            {data.map((item) => (
                <ListItem key={item.id} name={item.name} image={item.image} price={item.price}  />
            ))}
            </>
        )
    }    

} 

