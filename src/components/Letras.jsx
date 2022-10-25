import React from 'react'

export function Letras({handleClick,descubierto, acierto, id, valor}) {

    let regex = /[.,\/#¡!$%\^&\*;:{}=\-_`~()”“"…]/
    let tester = regex.test(valor)
    const soloLetras = () => {
        if (tester){ return "signo"} else if (acierto){return "letra2"} else if (descubierto){return "letra3"} else {return "letra"} 
    }
    const soloValor = () =>{
        if (tester){ return valor} else if (descubierto){return valor} else {return}
    }

  
  return (
    <div className="father-letra">
        <div onClick={()=>handleClick(id)} className={soloLetras()}>{soloValor()}</div>
        <div onClick={()=>handleClick(id)} className={tester ? "" : "brillo"}></div>
    </div>
   )
}
