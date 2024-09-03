import React from 'react'
import { useEffect,useState } from 'react'

function SeccionCuatro() {
    const [footer,setFooter] = useState([]);
    const {VITE_API} = import.meta.env

    useEffect(()=>{

        let controller = new AbortController();
        let options ={
            method:'GET',
            headers:
            {'Context-Type': 'application/json'},
            signal: controller.signal
        }
        fetch( VITE_API ,options)
        .then(resp =>resp.json())
        .then(datos =>setFooter(datos))
        .catch(error=>console.log(error))
        .finally(()=>controller.abort())


  
    },[])
  return (
    <>
        <section>
        {footer.map((seccion,index)=>{
            const claseUnica = `seccionUno-${index}`                
                return seccion.nombre === 'seccionSeis'? ( <div key={seccion.nombre} className={claseUnica}>
                        <img src={seccion.imgFooter} alt="footer" />
                    </div>)
                    :<></>
                
                })}
        </section>
    </>
  )
}

export default SeccionCuatro