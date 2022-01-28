import * as types from "../../types/types"
import * as api from '../../../services/user.service'

export const fetchUsers = (user) => async (dispatch) => {
    dispatch({
      type: types.FETCH_USER_REQUEST,
      
    })
       try {
         const tasks = await api.getUser(user)
          dispatch({
            type: types.FETCH_USER_SUCCESS,
            tasks,
          })
       } catch (e) {
        dispatch({
          type: types.FETCH_USER_FAILURE,
        })
       }
 
 }

export const addUser = (user) => async (dispatch) => {
  const newUser = await api.addUser(user)

  dispatch({
    type: types.ADD_USER,
    user: newUser,
  })
}
export const deleteUser = (user) => async (dispatch) => {
  await api.deleteUser(user)
  const id=user.id
  dispatch ( {
    type: types.DELETE_USER,
    id,
  })
}
export const fetchUserById = (id,user1) => async (dispatch) => {
  const user = await api.fetchUserById(id,user1)
  dispatch ( {
    type: types.FETCH_USER_BY_ID,
    user,
  })
}
export const updateUser = (id, user,token) => async (dispatch) => {
  const updatedUser = await api.updateUser(id, user,token)

  dispatch ( {
    type: types.UPDATE_USER,
    id,
    user: updatedUser,
  })
}

export const addCenterUser = (user) => async (dispatch) => {
  const newUser = await api.addCenterUser(user)

  dispatch({
    type: types.ADD_CENTER_USER,
    user: newUser,
  })
}