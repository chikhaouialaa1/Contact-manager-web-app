import React, { useState, useEffect }from 'react'
import AdminSideBar from '../../../components/AdminSideBar/AdminSideBar'
import CategorieCenters from '../../../components/Categorie/Categorie'
import './Categorie.css'
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../redux/actions/Categorie/index'

function Categorie() {
    const categories = useSelector((state) => state.categories)
    const user = useSelector((state) => state.user)

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
      }
      useEffect(() => {
        dispatch(actions.fetchCategories(user))
      }, [])
   console.log(categories)
    const deleteCategorie =  (id) => {
        dispatch(actions.deleteCategorie({id,user}))}
    return (
        <div className="categorieationCenter">
            <AdminSideBar/>
            {categories.loading  && <div>Loading ... </div>}
            {!categories.loading && isVisible &&(
                <CategorieCenters categories ={categories.list} deleteCategorie={deleteCategorie}/>
            )}
            
        </div>
    )
}

export default Categorie
