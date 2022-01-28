import addItem from '../actions/add-to-list'
import React, { useState } from 'react'    

import { useDispatch } from "react-redux";


function AddItem(){
const [state1, setState1]= useState()
const [state2, setState2]= useState()    
const dispatch = useDispatch()   
/*
const mylist='aaa'
const handleSubmit=(e)=>{
    console.log(e.target.text.value)
    //dispatch(addItem(e.target.text.value))
    setState(e.target.text.value)
    
    dispatch(addItem(state))

}
*/
//dispatch(addItem(mylist))

return(
    <div>
        <>
        <input
                value={state1}
                onChange={(e)=>setState1(e.target.value)}
                type="text" className="col form-control"/>
        </>
        <br/>
        <>
        <input
                value={state2}
                onChange={(e)=>setState2(e.target.value)}
                type="text" className="col form-control"/>
        </>
        <br/>
        <button   
                onClick={()=>{
                       dispatch(  addItem({
                        text1: state1,
                        text2: state2
                    }));
                        setState1('');
                        setState2('');
                        
                    }}
                className="btn btn-primary mx-2">login</button>
    </div>
)
}

//<button onClick={()=>dispatch(addItem())} >add</button>
        


export default AddItem  