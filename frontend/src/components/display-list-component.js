import { useDispatch,useSelector } from "react-redux";
import React from "react";


function DisplayItems(){
    //const numbers=[1,2,3,4,5]
    //const numbers=[1,2]
    const numbers = useSelector(state=>state)

    const listItems = numbers.map((number) =>
    <li >{number}</li>
    )
    return (
        <ul>{listItems}</ul>
    )
    }
    
    
    
    export default DisplayItems 