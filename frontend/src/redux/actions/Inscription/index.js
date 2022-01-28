import * as types from "../../types/types"
import * as api from '../../../services/auth-Service'

export const inscription = (user) => async (dispatch) => {
  const user1 = await api.inscription(user)

  dispatch({
    type: types.INSCRIPTION,
    user: user1,
  })
}


export const login = (user) => async (dispatch) => {
  const user1 = await api.login(user)
console.log("qqqqqqqqqqqqqqqqqqqqq"+user1)
  dispatch({
    type: types.LOGIN,
    user: user1
  })
}

export const adminlogin = (user) => async (dispatch) => {
  const user1 = await api.adminlogin(user)
dispatch({
    type: types.LOGIN,
    user: user1
  })
}
