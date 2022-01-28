import deleteItem from '../actions/delete-from-list'
import { useDispatch } from "react-redux";


function RemoveItem(){
    //event.target.value
    const dispatch = useDispatch()
    return(
        <div>
            <p>Remove item component</p>
        <>
        <button onClick={()=>{dispatch(deleteItem())}} >Delete</button>
        </>
        </div>
    )
    }
    
    
    
    export default RemoveItem 