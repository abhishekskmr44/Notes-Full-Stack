import '../App.css';
import React, { useState, useEffect } from 'react'

const Notes = () => {
    
    const [notes,setNotes] = useState([])
   const token = localStorage.getItem("PSC")
    const getData = () => {
        fetch("http://localhost:7777/notes",{
          method:"GET", 
          headers:{
            'Authorization':`Bearer ${token}`
          }
          
        })
        .then((res)=>res.json())
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }

useEffect(()=> {
    getData()
},[])
   

   if(!localStorage.getItem("PSC")){
    return <h1>Please Login again</h1>
   }     
    
  return (
    <div>

   
    <h1>Notes Here</h1>
   {
    notes.length>0 && notes.map((note,index)=>{
        return <div>
        <p key={index}>
        {note.Heading}
        </p>
        <button>DELETE</button>
        </div>
    })
   }
   
    </div>
  )
}

export default Notes