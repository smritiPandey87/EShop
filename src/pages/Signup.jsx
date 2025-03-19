import React, { useState } from 'react'
import axios from "axios"

export default function Signup() {
  const [formData,setformData] = useState({
    name:"",
    email:"",
    password:"",
    confromPassword:""
  })
  const [msg,setMsg] = useState("")
  const handleChange =(e)=> {
    setformData({...formData,[e.target.name]:e.target.value})
  }
  const hadleSubmit = async(e) =>{
   e.preventDefault()
   setMsg('')
    try{
      const response = await axios.post('https://dummyjson.com/users/add',formData)
      console.log(response.data.id)
      setMsg(`User created successfully ! id:${response.data.id}`)
      console.log(response.data)
      
    }
    catch(error){
      setMsg("Sihnupfailed try again later")
      console.log("error",error)
    }
  } 
  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={hadleSubmit}>
          <label>Name</label>
          <input  name="name"  onChange={ handleChange } type="text" required placeholder='Enter Your Name '/>
        <label>Email</label>
        <input name='email' onChange={handleChange} type="text"  required placeholder=" Enter Your email" />
        <label> Create Your Password</label>
        <input name='password'  onChange={handleChange} type="text" required  placeholder="Enter password" />
        <label> Confirm Your Password</label>
        <input  name="confirmPassword" onChange={handleChange} type="text" required  placeholder="Enter password" />
      
        <button type='submit'>Submit</button>
      </form>
      {msg && <p>{msg}</p>}
      <button>Already have an account? Login</button>
        
    </div>
  )
}
