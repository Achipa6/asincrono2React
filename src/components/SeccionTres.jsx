import React from 'react'
import { useEffect,useState } from 'react'

function SeccionTres() {
  const [seccionTres,setSeccionTres] = useState([]);

  const {VITE_API} = import.meta.env

  useEffect(()=>{
    let controller = new AbortController()
    let options= {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      },signal: controller.signal
    }
    fetch( VITE_API,options)
    .then(res =>res.json())
    .then(datos =>setSeccionTres(datos))
    .catch(err =>console.log(err))
    .finally(()=>controller.abort())

  })
  return (
    <>
     <h1 className='titulo'>Praise for Triage 1 </h1>
    <section className='claseTres'>
  {seccionTres.map((seccion)=>{


     return( 
    <div key={seccion.nombre} >
      <img  src={seccion.imgTexto} alt="Texto" className='Texto' />
    </div>)
   
 })}
 
  </section>
  </>
  )
}

export default SeccionTres