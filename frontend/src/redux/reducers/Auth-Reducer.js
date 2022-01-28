import * as types from '../types/types'

const initialState = {
    loading: false,
    errors: false,
    list: [],
    selectedVaccin:{},
    token:""
  }


const AuthReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.INSCRIPTION:
            return{...state,
            list:[...state.list, action.User]}
            case types.LOGIN:
                return{...state,
                    token: action.user}
        default:
            return state
    }

}

export default AuthReducer