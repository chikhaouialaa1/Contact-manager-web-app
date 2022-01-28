
import { Mylist } from "../../services/user-list"

//initiallist=Mylist


const listManager=(initiallist=[],actions)=>{
    switch(actions.type){
        case "add" :
            console.log("heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeere")
            let newitemlist=[...initiallist]
            console.log(actions)

            /*
            newitemlist.push(actions.text)
            console.log(newitemlist)
            return newitemlist
            */
            //return {    }
            //return [... initiallist,initiallist.push(actions.text) ] 
        case "delete" :
            //console.log(Mylist)  
            console.log(actions)
        //return Mylist.splice(Mylist.length-1, 1)
            let newlist=initiallist.splice(1,initiallist.length-1)
            return newlist

        default:
            return initiallist
    }
}


export default listManager