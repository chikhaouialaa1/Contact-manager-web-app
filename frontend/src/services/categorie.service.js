import Axios from 'axios'
  
export const getCategorie= async (user) => {
    //await delay(1000)
    const headers = {
      "Authorization" : `${user.token}`}
    const result = await Axios.get(
        "http://localhost:4000/categorie/categories",{
          headers: headers
        })
    console.log(result.data.categories+"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    return result.data.categories
  }
  
export const addCategorie = async (categorie) => {
  const headers = {
    "Authorization" : `${categorie.token}`}
    const result = await Axios.post(
      "http://localhost:4000/categorie/categorie", categorie,{
        headers: headers
      })
    
    return result.data
  }

  export const deleteCategorie = async (user) => {
    console.log(user.id)
      const result = await Axios.delete(
        "http://localhost:4000/categorie/categorie/"+user.id
        , {
          headers:  {
            "Authorization" : `${user.user.token}`}
        })
      
      return result.data
    }
    export const fetchCategorieById = async (id,user) => {
        const result = await Axios.get(
          "http://localhost:4000/categorie/categorie/"+id, {
            headers:  {
              "Authorization" : `${user.token}`}
          })
          console.log("ggggggggggggggggggggggggggggg"+result)
        return result.data.categorie
      }
       export const updateCategorie = async (id, name,token) => {
    console.log(name)
      const result = await Axios.put(
        "http://localhost:4000/categorie/categorie/"+id,{name}, {
          headers:  {
            "Authorization" : `${token}`}
        })
      
      return result.data
    }

    
