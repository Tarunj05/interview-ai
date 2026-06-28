import axios from "axios"
// create an axois instance , so that we don't write the same thing again and again

const api = axios.create({
  baseURL:"http://localhost:3000",
  //by default server doesn't access the cookies
  //so we send the request with a flag
  withCredentials:true
})

export async function register( {username , email , password} ){
  try{ 

    const response = await api.post('/api/auth/register',{
      username,email,password
    })

    return response.data
  }catch(err){
    console.log(err)
  }

}

export async function login({email ,password}){
  try{
    const response = await api.post('/api/auth/login',{
      email,password
    })
    return response.data;
  }catch(err){
    console.log(err)
  }
}

export async function logout(){
  try{
    const response = await api.get('/api/auth/logout')
    return response.data
  }catch(err){
    console.log(err)
  }
}

export async function getMe(){
  try{
    const response = await api.get('/api/auth/get-me')
    return response.data
  }catch(err){
    console.log(err)
  }
}