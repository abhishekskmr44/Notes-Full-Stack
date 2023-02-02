import '../App.css';
import React, { useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState("")

    const handleSubmit = () => {
        const payload = {
            email,
            password,
            age
        }

        // endpoint for generating user
        fetch("http://localhost:7777/user/signup",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        .then((res)=>res.json())
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }
  return (
    <div>
    <h1>Register Here</h1>
    <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
    <br/>
    <input type="text" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
    <br/>
    <input type="text" placeholder="age" onChange={(e)=>setAge(e.target.value)}/>
    <br/>
    <button onClick={handleSubmit}>Register</button>
    </div>
    

  )
}

export default Register