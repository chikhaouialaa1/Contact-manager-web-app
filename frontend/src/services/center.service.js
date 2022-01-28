import Axios from 'axios'
  

export const getCenter= async () => {
    //await delay(1000)

    const result = await Axios.get(
        "http://localhost:4000/Vaccination-centre-list"
    )
    return result.data
  }


export const addCenter = async (center) => {
    const result = await Axios.post(
      "http://localhost:4000/new-vaccination-centre",
      center
    )
    return result.data
  }
export const deleteCenter = async (id) => {
    console.log(id)
      const result = await Axios.post(
        "http://localhost:4000/Vaccination-centre-del/"+id
      )
      
      return result.data
    }
export const fetchCenterById = async (id) => {
      const result = await Axios.get(
        "http://localhost:4000/Vaccination-centre-id/"+id
      )
      return result.data
    }
    export const fetchCenterVaccinById = async (id) => {
      const result = await Axios.get(
        "http://localhost:4000/Vaacin-stock/"+id
      )
      console.log("wwwwwwwwwwwwwwww",result)
      return result.data
    }
    export const fetchCenterVaccin = async (id) => {
      const result = await Axios.get(
        "http://localhost:4000/Vaccin-stock/"+id
      )
      console.log("wwwwwwwwwwwwwwww",result)
      return result.data
    }
export const updateCenter = async (_id, center) => {
      const result = await Axios.post(
        "http://localhost:4000/Vaccination-centre-updated",{_id, center} 
        
      )
      return result.data
  }
//gouvernorat
export const getGouvernorat= async () => {
    //await delay(1000)

    const result = await Axios.get(
        "http://localhost:4000/gouvernorat"
    )
    return result.data
  }
//ville
export const getVille= async () => {
    //await delay(1000)

    const result = await Axios.get(
        "http://localhost:4000/ville"
    )
    return result.data
  }