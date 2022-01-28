import Axios from 'axios'
  
export const getProduit= async (user) => {
    //await delay(1000)
    const headers = {
      "Authorization" : `${user.token}`}
    const result = await Axios.get(
        "http://localhost:4000/produits",{
          headers: headers
        })
    console.log(result.data.produits+"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    return result.data.produits
  }
  
export const addProduit = async (produit) => {
  const headers = {
    "Authorization" : `${produit.token}`}
    const result = await Axios.post(
      "http://localhost:4000/produit", produit,{
        headers: headers
      })
    
    return result.data
  }

  export const deleteProduit = async (user) => {
    console.log(user.id)
      const result = await Axios.delete(
        "http://localhost:4000/produit/"+user.id
        , {
          headers:  {
            "Authorization" : `${user.user.token}`}
        })
      
      return result.data
    }
    export const fetchProduitById = async (id,user) => {
        const result = await Axios.get(
          "http://localhost:4000/produit/"+id, {
            headers:  {
              "Authorization" : `${user.token}`}
          })
          console.log("ggggggggggggggggggggggggggggg"+result)
        return result.data.produit
      }
       export const updateProduit = async (id, Produit,token) => {
    console.log(Produit)
      const result = await Axios.put(
        "http://localhost:4000/produit/"+id,{Produit}, {
          headers:  {
            "Authorization" : `${token}`}
        })
      
      return result.data
    }

    
export const addCenterProduit = async (produit) => {
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",produit)
  const result = await Axios.post(
    "http://localhost:4000/ProduitCenter",
    produit
  )
  return result.data
}
