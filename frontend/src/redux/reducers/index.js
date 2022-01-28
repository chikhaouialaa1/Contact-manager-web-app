import produits from './Produit'
import user from './Auth-Reducer'
import categories from './Categorie'
import users from './User'

import { combineReducers } from "redux"

const rootReducer = () =>{
 return combineReducers({
    
    produits,user,categories,users
  })
}

export default rootReducer
