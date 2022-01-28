import * as types from '../types/types'

const initialState = {
    loading: false,
    errors: false,
    list: [],
    selectedUser:{},
  }

const users = (state = initialState, action) =>{
    switch(action.type){
        case types.FETCH_USER_REQUEST:
            return { ...state, loading: true, error: true }
        case types.FETCH_USER_SUCCESS:
            return { ...state, list: [...action.tasks], loading: false }
        case types.FETCH_USER_FAILURE:
            return { ...state, error: true, loading: false }
        case types.ADD_USER:
            return{...state,
            list:[...state.list, action.User]}
        case types.DELETE_USER:
            const newusers = state.list.filter((User) => User._id !== action.id)
            return { ...state, list: newusers }
        case types.FETCH_USER_BY_ID:
            return{...state,
            selectedUser: action.user}
        case types.UPDATE_USER:
            const updatedusers = state.list.map((User) => {
                if (User._id === action.id) {
                    return action.User
                }
                  return User
                })
                return { ...state, list: updatedusers }
        default:
            return state
    }

}
export default users