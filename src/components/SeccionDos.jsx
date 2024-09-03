import React from 'react'
import { useEffect, useState } from 'react'


function SeccionDos() {
  const [seccionDos,setSeccionDos] = useState([])
  const {VITE_API} =import.meta.env
  
  useEffect(()=>{
    
    let controller = new AbortController()
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        signal: controller.signal
    }
    fetch( VITE_API , options)
    .then(resp =>resp.json())
    .then(datos =>setSeccionDos(datos))
    .catch(err=>console.log(err))
    .finally(()=>controller.abort())
  },[])
  return (
    <>
      <section className='claseDos'>
      
    {seccionDos.map((seccion)=>{


       return( 
      <div key={seccion.nombre} >
        <img  src={seccion.imgCard} alt="Card" className='cards' />
      </div>)
     
   })}
   
    </section>
    </>
  )
}

export default SeccionDos