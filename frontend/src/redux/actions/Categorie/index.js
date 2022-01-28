import * as types from "../../types/types"
import * as api from '../../../services/categorie.service'

export const fetchCategories = (user) => async (dispatch) => {
    dispatch({
      type: types.FETCH_CATEGORIE_REQUEST,
      
    })
       try {
         const tasks = await api.getCategorie(user)
          dispatch({
            type: types.FETCH_CATEGORIE_SUCCESS,
            tasks,
          })
       } catch (e) {
        dispatch({
          type: types.FETCH_CATEGORIE_FAILURE,
        })
       }
 
 }

export const addCategorie = (categorie) => async (dispatch) => {
  const newCategorie = await api.addCategorie(categorie)

  dispatch({
    type: types.ADD_CATEGORIE,
    categorie: newCategorie,
  })
}
export const deleteCategorie = (user) => async (dispatch) => {
  await api.deleteCategorie(user)
  const id=user.id
  dispatch ( {
    type: types.DELETE_CATEGORIE,
    id,
  })
}
export const fetchCategorieById = (id,user) => async (dispatch) => {
  const categorie = await api.fetchCategorieById(id,user)
  dispatch ( {
    type: types.FETCH_CATEGORIE_BY_ID,
    categorie,
  })
}
export const updateCategorie = (id, name,token) => async (dispatch) => {
  const updatedCategorie = await api.updateCategorie(id, name,token)

  dispatch ( {
    type: types.UPDATE_CATEGORIE,
    id,
    categorie: updatedCategorie,
  })
}
