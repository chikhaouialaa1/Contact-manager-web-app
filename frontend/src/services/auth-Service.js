import React , {useEffect,useState} from 'react'
import Axios from 'axios'

 
export const inscription = async (user) => {
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",user)
  const result = await Axios.post(
    "http://localhost:4000/auth/signup",
    user
  )
  return result.data
}

export const login = async (user) => {
  console.log(user)
  const result = await Axios.post(
    "http://localhost:4000/user/login",
    user
  )
  console.log("ww",result)
  localStorage.setItem("token", result.data);
  return result.data.token
}


export const adminlogin = async (user) => {
  console.log(user)
  const result = await Axios.post(
    "http://localhost:4000/login/admin",
    user
  )
  console.log("ww",result)
  localStorage.setItem("token", result.data);
  return result.data.token
}


let badpassword = false 
export {badpassword}
