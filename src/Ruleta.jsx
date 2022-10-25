import React,{useState} from 'react'

export function Ruleta({premios,setx2,changePlayer,datos,setPremio,setInfoLine, soundPlay, audioClips,premio,twoPlayerRules}) {


    const calcular = (valor) => {
        const ruleta = document.querySelector("#ruleta")
        let grados = Math.floor(valor * 360 / 14400);

        setTimeout(()=>{ruleta.style.transform = `rotate(${grados}deg)`},600)
        ruleta.style.transform = `rotate(${valor}deg)`
        
        ruleta.style.transition = "1s ease"
        document.getElementById("letraInput").focus()
        setTimeout(() => {
            
            switch (true){
                case grados > 0 && grados <= 15:
                    console.log("has conseguido un premio de 25")
                    setPremio(25)
                    setInfoLine("Por 25€, introduce una consonante")
                    break;
                case grados > 0 && grados <= 30:
                    console.log("has conseguido un x2")
                    setx2(true)
                    setPremio(0)
                    setInfoLine("si aciertas, tu dinero se multiplicará por 2")
                    break;
                    case grados > 0 && grados <= 45:
                    console.log("has conseguido un premio de 100")
                    setPremio(100)
                    setInfoLine("Por 100€, introduce una consonante")
                    break;
                    case grados > 0 && grados <= 60:
                        console.log("has conseguido un premio de 0")
                        setPremio(0)
                        setInfoLine("Por 0€, introduce una consonante")
                        break;
                        case grados > 0 && grados <= 75:
                    console.log("has conseguido un premio de 50")
                    setPremio(50)
                    setInfoLine("Por 50€, introduce una consonante")
                    break;
                        case grados > 0 && grados <= 90:
                            console.log("has caído en la quiebra")
                            twoPlayerRules("quiebra")
                            setPremio()
                            setInfoLine("Has caído en la Quiebra, pierdes todo tu dinero")
                            break;
                            case grados > 0 && grados <= 105:
                    console.log("has conseguido un premio de 100")
                    setPremio(100)
                    setInfoLine("Por 100€, introduce una consonante")
                    break;
                            case grados > 0 && grados <= 120:
                                console.log("has conseguido un premio de 25")
                                setPremio(25)
                                setInfoLine("Por 25€, introduce una consonante")
                                break;
                                case grados > 0 && grados <= 135:
                    console.log("has caído en Pierde Turno")
                    setPremio()
                    changePlayer()
                    setInfoLine("Pierdes el turno!")
                    break;
                                case grados > 0 && grados <= 150:
                                    console.log("has conseguido un premio de 100")
                                    setPremio(100)
                                    setInfoLine("Por 100€, introduce una consonante")
                                    break;
                                    case grados > 0 && grados <= 165:
                    console.log("has conseguido un premio de 0")
                    setPremio(0)
                    setInfoLine("Por 0€, introduce una consonante")
                    break;
                                    case grados > 0 && grados <= 180:
                                        console.log("has conseguido un premio de 50")
                                        setPremio(50)
                                        setInfoLine("Por 50, introduce una consonante")
                                        break;
                                        case grados > 0 && grados <= 195:
                    console.log("has conseguido un premio de 25")
                    setPremio(25)
                    setInfoLine("Por 25€, introduce una consonante")
                    break;
                                        case grados > 0 && grados <= 210:
                                            console.log("has conseguido un premio de 150")
                                            setPremio(150)
                                            setInfoLine("Por 150€, introduce una consonante")
                                            break;
                                            case grados > 0 && grados <= 225:
                    console.log("has conseguido un premio de 100")
                    setPremio(100)
                    setInfoLine("Por 100€, introduce una consonante")
                    break;
                                            case grados > 0 && grados <= 240:
                                                console.log("has caído en Pierde Turno")
                                                setPremio()
                                                changePlayer()
                                                setInfoLine("Pierdes el turno!")
                                            break;    
                                                case grados > 0 && grados <= 255:
                    console.log("has conseguido un premio de 50")
                    setPremio(50)
                    setInfoLine("Por 50€, introduce una consonante")
                    break;
                                                case grados > 0 && grados <= 270:
                                                    console.log("has conseguido un premio de 300")
                                                    setPremio(300)
                                                    setInfoLine("Por 300€, introduce una consonante")
                                                    break;
                                                    case grados > 0 && grados <= 285:
                    console.log("has conseguido un premio de 100")
                    setPremio(100)
                    setInfoLine("Por 100€, introduce una consonante")
                    break;
                                                    case grados > 0 && grados <= 300:
                                                        console.log("has conseguido un premio de 25")
                                                        setPremio(25)
                                                        setInfoLine("Por 25€, introduce una consonante")
                                                        break;
                                                        case grados > 0 && grados <= 315:
                    console.log("has conseguido un premio de 150")
                    setPremio(150)
                    setInfoLine("Por 150€, introduce una consonante")
                    break;
                                                        case grados > 0 && grados <= 330:
                                                            console.log("has conseguido un premio de 100")
                                                            setPremio(100)
                                                            setInfoLine("Por 100€, introduce una consonante")
                                                            break;
                                                            case grados > 0 && grados <= 345:
                    console.log("has conseguido un premio de 0")
                    setPremio(0)
                    setInfoLine("Por 0€, introduce una consonante")
                    break;
                                                            case grados > 0 && grados <= 360:
                                                                console.log("has conseguido un premio de 50")
                                                                setPremio(50) 
                                                                setInfoLine("Por 50€, introduce una consonante")                                                              
                                                                break;
                                                            }
                                                        },2000);
                                                    } 

    const startRotation = () => {
        const todoLibre = datos.every(el => el.every(ello => ello.acierto === false))
        console.log(`todo clicado = ${todoLibre}`)
        if(premio === 0 || premio) {
            console.log("tienes premio esperando")
        return setInfoLine("Ya tienes un premio esperando! Utiliza una consonante"), setTimeout(()=> setInfoLine(`Por ${premio}€, introduce una consonante`),1500)
        }
            if(todoLibre){
                console.log("la ruleta funciona")
                soundPlay(audioClips.ruleta)
                let valor = Math.floor(Math.random()*7200);
                calcular(valor);
            }
            else{ 
                console.log("descubre todo antes de seguir")
                return setInfoLine("Descubre todos los aciertos antes de girar la ruleta de nuevo"), setTimeout(()=> setInfoLine("Compra vocal o gira la ruleta para una nueva consonante"),2000)}
        
        
    }
                                                    
                                                    return (
                                                        <div className="padre">
                <div className="arrow-white"></div>
                <div className="arrow"></div>
                <ul className="circle-white"></ul>
                <ul id="ruleta" className="ruleta circle">
                    <li className="option"><div className="text" value={50}><p className="linear2">50</p></div></li>
                    <li className="option"><div className="text" value={0}><p className="linear2">0</p></div></li>
                    <li className="option"><div className="text" value={100}><p className="linear2">100</p></div></li>
                    <li className="option"><div className="text" value={150}><p className="linear2">150</p></div></li>
                    <li className="option"><div className="text" value={25}><p className="linear2">25</p></div></li>
                    <li className="option"><div className="text" value={100}><p className="linear2">100</p></div></li>
                    <li className="option"><div className="text" value={300}><p className="linear2">300</p></div></li>
                    <li className="option"><div className="text" value={50}><p className="linear2">50</p></div></li>
                    <li className="option"><div className="text" value={0.5}><p className="linear5">PIERDE TURNO</p></div></li>
                    <li className="option"><div className="text" value={100}><p className="linear2">100</p></div></li>
                    <li className="option"><div className="text" value={150}><p className="linear2">150</p></div></li>
                    <li className="option"><div className="text" value={25}><p className="linear2">25</p></div></li>
                    <li className="option"><div className="text" value={50}><p className="linear2">50</p></div></li>
                    <li className="option"><div className="text" value={0}><p className="linear2">0</p></div></li>
                    <li className="option"><div className="text" value={100}><p className="linear2">100</p></div></li>
                    <li className="option"><div className="text" value={0.5}><p className="linear3">PIERDE TURNO</p></div></li>
                    <li className="option"><div className="text" value={25}><p className="linear2">25</p></div></li>
                    <li className="option"><div className="text" value={100}><p className="linear2">100</p></div></li>
                    <li className="option"><div className="text" value={0.5}><p className="linear5">QUIEBRA</p></div></li>
                    <li className="option"><div className="text" value={50}><p className="linear2">50</p></div></li>
                    <li className="option"><div className="text" value={0}><p className="linear2">0</p></div></li>
                    <li className="option"><div className="text" value={100}><p className="linear2">100</p></div></li>
                    <li className="option"><div className="text" value={0.5}><p className="linear4">x 2</p></div></li>
                    <li className="option"><div className="text" value={25}><p className="linear2">25</p></div></li>
                </ul>
                <button onClick={startRotation} className="btn-spin">Roll</button>
         
    </div>
  )
}
