const authUser=(login_object)=>{
    return{
        type : "userlogin",
        email:login_object.email,
        password:login_object.password
    }
}

export default authUser
