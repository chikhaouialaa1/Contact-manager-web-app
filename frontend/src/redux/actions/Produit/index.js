import * as types from "../../types/types"
import * as api from '../../../services/produit.service'

export const fetchProduits = (user) => async (dispatch) => {
    dispatch({
      type: types.FETCH_PRODUIT_REQUEST,
      
    })
       try {
         const tasks = await api.getProduit(user)
          dispatch({
            type: types.FETCH_PRODUIT_SUCCESS,
            tasks,
          })
       } catch (e) {
        dispatch({
          type: types.FETCH_PRODUIT_FAILURE,
        })
       }
 
 }

export const addProduit = (produit) => async (dispatch) => {
  const newProduit = await api.addProduit(produit)

  dispatch({
    type: types.ADD_PRODUIT,
    produit: newProduit,
  })
}
export const deleteProduit = (user) => async (dispatch) => {
  await api.deleteProduit(user)
  const id=user.id
  dispatch ( {
    type: types.DELETE_PRODUIT,
    id,
  })
}
export const fetchProduitById = (id,user) => async (dispatch) => {
  const produit = await api.fetchProduitById(id,user)
  dispatch ( {
    type: types.FETCH_PRODUIT_BY_ID,
    produit,
  })
}
export const updateProduit = (id, produit,token) => async (dispatch) => {
  const updatedProduit = await api.updateProduit(id, produit,token)

  dispatch ( {
    type: types.UPDATE_PRODUIT,
    id,
    produit: updatedProduit,
  })
}

export const addCenterProduit = (produit) => async (dispatch) => {
  const newProduit = await api.addCenterProduit(produit)

  dispatch({
    type: types.ADD_CENTER_PRODUIT,
    produit: newProduit,
  })
}