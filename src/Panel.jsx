import { useState, useEffect } from 'react'
import { Letras } from './components/Letras'

export function Panel({ datos, setDatos, soundPlay, audioClips }) {
    


    const handleClick = (id) => {
        console.log(id)
            setDatos(prevDatos => prevDatos.map(el => el.map(ello => {
                if ( ello.id === id && ello.acierto){
                    //console.log(ello.acierto)
                    //console.log(datos)
                    soundPlay(audioClips.pop)
                return {...ello, descubierto: true, acierto: false }
                }else {return ello}
            })))
          
    }


   // console.log(datos)
  return (
    
    <div className="principal flex">
        { 
            datos.map((el,index) =>{
                return ( el[0] &&   <div key={index}className="flex">
                                    {el.map((ele, index )=> {    
                                        return  <Letras handleClick={handleClick} 
                                                        descubierto={ele.descubierto} 
                                                        acierto={ele.acierto} 
                                                        id={ele.id} 
                                                        valor={ele.valor}
                                                        key={index} />      
                                    })}
                                </div> )})
    }

    </div>
    )
}
