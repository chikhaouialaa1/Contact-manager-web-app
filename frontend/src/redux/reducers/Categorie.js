import * as types from '../types/types'

const initialState = {
    loading: false,
    errors: false,
    list: [],
    selectedCategorie:{},
  }

const categories = (state = initialState, action) =>{
    switch(action.type){
        case types.FETCH_CATEGORIE_REQUEST:
            return { ...state, loading: true, error: true }
        case types.FETCH_CATEGORIE_SUCCESS:
            return { ...state, list: [...action.tasks], loading: false }
        case types.FETCH_CATEGORIE_FAILURE:
            return { ...state, error: true, loading: false }
        case types.ADD_CATEGORIE:
            return{...state,
            list:[...state.list, action.Categorie]}
        case types.DELETE_CATEGORIE:
            const newcategories = state.list.filter((Categorie) => Categorie._id !== action.id)
            return { ...state, list: newcategories }
        case types.FETCH_CATEGORIE_BY_ID:
            return{...state,
            selectedCategorie: action.categorie}
        case types.UPDATE_CATEGORIE:
            const updatedcategories = state.list.map((Categorie) => {
                if (Categorie._id === action.id) {
                    return action.Categorie
                }
                  return Categorie
                })
                return { ...state, list: updatedcategories }
        default:
            return state
    }

}
export default categories