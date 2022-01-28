import Axios from 'axios'
  
export const getUser= async (user) => {
    //await delay(1000)
    const headers = {
      "Authorization" : `${user.token}`}
    const result = await Axios.get(
        "http://localhost:4000/users",{
          headers: headers
        })
    console.log(result.data.user+"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    return result.data.user
  }
  
export const addUser = async (user) => {
  const headers = {
    "Authorization" : `${user.token}`}
    const result = await Axios.post(
      "http://localhost:4000/user", user,{
        headers: headers
      })
    
    return result.data
  }

  export const deleteUser = async (user) => {
    console.log(user.id)
      const result = await Axios.delete(
        "http://localhost:4000/user/"+user.id
        , {
          headers:  {
            "Authorization" : `${user.user.token}`}
        })
      
      return result.data
    }
    export const fetchUserById = async (id,user1) => {
        const result = await Axios.get(
          "http://localhost:4000/user/"+id, {
            headers:  {
              "Authorization" : `${user1.token}`}
          })
          console.log("ggggggggggggggggggggggggggggg"+result)
        return result.data.user
      }
       export const updateUser = async (id, User,token) => {
    console.log(User)
      const result = await Axios.put(
        "http://localhost:4000/user/"+id,{User}, {
          headers:  {
            "Authorization" : `${token}`}
        })
      
      return result.data
    }

    
export const addCenterUser = async (user) => {
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",user)
  const result = await Axios.post(
    "http://localhost:4000/UserCenter",
    user
  )
  return result.data
}
