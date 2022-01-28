import * as types from '../types/types'

const initialState = {
    loading: false,
    errors: false,
    list: [],
    selectedProduit:{},
  }

const produits = (state = initialState, action) =>{
    switch(action.type){
        case types.FETCH_PRODUIT_REQUEST:
            return { ...state, loading: true, error: true }
        case types.FETCH_PRODUIT_SUCCESS:
            return { ...state, list: [...action.tasks], loading: false }
        case types.FETCH_PRODUIT_FAILURE:
            return { ...state, error: true, loading: false }
        case types.ADD_PRODUIT:
            return{...state,
            list:[...state.list, action.Produit]}
        case types.DELETE_PRODUIT:
            const newproduits = state.list.filter((Produit) => Produit._id !== action.id)
            return { ...state, list: newproduits }
        case types.FETCH_PRODUIT_BY_ID:
            return{...state,
            selectedProduit: action.produit}
        case types.UPDATE_PRODUIT:
            const updatedproduits = state.list.map((Produit) => {
                if (Produit._id === action.id) {
                    return action.Produit
                }
                  return Produit
                })
                return { ...state, list: updatedproduits }
        default:
            return state
    }

}
export default produits