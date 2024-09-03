import React from 'react'
import { useEffect, useState } from 'react'





function SeccionUno() {
  const [seccionUno,setSeccionUno] = useState([])

  const {VITE_API} = import.meta.env  

  useEffect(()=>{
    
    let controller = new AbortController()
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        signal: controller.signal
    }
    fetch(VITE_API, options)
    .then(resp =>resp.json())
    .then(datos =>setSeccionUno(datos))
    .catch(err=>console.log(err))
    .finally(()=>controller.abort())
  },[])
  return (
    <>
      <section >
      
    {seccionUno.map((seccion, index)=>{

      const claseUnica = `seccionUno-${index}`
       return seccion.nombre != 'seccionSeis'? ( <div key={seccion.nombre} className={claseUnica}>
          <img  src={seccion.imgParrafo} alt="parrafo" className='parrafos' />
          <img src={seccion.imgMovil} alt="movil"/>
        </div>)
       : <></>
     
   })}
   
    </section>
    </>
  )
}

export default SeccionUno