import { useEffect, useState, useCallback } from 'react'
import { Howler, Howl } from 'howler'
import { audioClips } from './sonidos'
import { Start } from "./Start"
import { Panel } from "./Panel"
import { Player } from "./Player"
import { Footer } from "./Footer"
import { Ruleta } from "./Ruleta"
import { Presentador } from "./Presentador"
import {calculoPanel, listaFrases, nuevaFraseNew} from "./Predata.js"


function App() {

{/* const funciones = () => {

    const dineroTotal = panel.reduce((sum,rank)=> sum + rank.dinero,0)
    console.log(dineroTotal)
    const panelTotal = panel.length
    console.log(panelTotal)
     const obj = {nombre:name, panelTotal:panelTotal, dineroTotal:dineroTotal} 
     console.log(obj)
    return obj
}*/}
console.log("re-render")
const [arrayFrases, setArrayFrases] = useState(listaFrases)
const [datos , setDatos] = useState(calculoPanel)
const [vidas , setVidas] = useState([true,true,true])
const [premio , setPremio] = useState(null)
const [x2 , setx2] = useState(false)

const [dinero , setDinero] = useState(0)
const [dinero2 , setDinero2] = useState(0)

const [dichas , setDichas] = useState("")
const [letra , setLetra] = useState([])
const [infoLine , setInfoLine] = useState("Gira la ruleta para empezar!")
const [ShowStart, setShowStart] = useState(true)
const [activateCall, setActivateCall] = useState(false)
const [activateCall2, setActivateCall2] = useState(false)
const [countPanel, setCountPanel] = useState(1)
const [panel, setPanel] = useState([])

const [shake, setShake] = useState(false)
const [aloneGame, setAloneGame] = useState(true)
const [select, setSelect] = useState(10)
const [dePlayerAVida, setdePlayerAVida] = useState(false)

const [playerOne, setplayerOne] = useState(true)
const [playerTwo, setplayerTwo] = useState(false)

const [name, setName] = useState("")
const [name2, setName2] = useState("")

const [ranking, setRanking] = useState(JSON.parse(localStorage.getItem("ranking")) || [])
const [tema , setTema] = useState("")

const [ganador, setGanador] = useState(
                                        {
                                          win: false,
                                          title: "Bienvenido a la ruleta",
                                          text: "Mira la zona de información bajo el panel para saber que paso es el siguiente."
                                        })

const infoGanador = () =>{
  setActivateCall(true)
  setGanador( {
    win: true,
    title: "Has resuelto el panel",
    text: "Tu dinero ha sido guardado. Continúa con el reto siguiente y conviértete en el número 1 del ranking!"
  })
}
const infoPerdedor = () =>{
  setActivateCall(true)
  setGanador( {
    win: false,
    title: "Te has quedado sin vidas",
    text: "Inténtalo otra vez, mira de comprar más vocales e intenta decir primero las consonantes que seguro crees que están y te irá mejor!"
  })
}

const infoInicial = () =>{
  setGanador( {
    win: false,
    title: "Bienvenido a la ruleta",
    text: "Mira la zona de información bajo el panel para saber que paso es el siguiente."
  })
}

//console.log(`activateCall es igual a ${activateCall}`)


const randomStartPlayer = () => {
  if (!aloneGame){
    const numR = Math.floor(Math.random()*2)
    console.log(numR)
     if(numR === 1){
      setplayerOne(true)
      setplayerTwo(false)
     }
     else{
      setplayerOne(false)
      setplayerTwo(true)
     }
  }
}

const soundPlay = (src) => {
  const sound = new Howl({src})
  sound.play()
}
Howler.volume(0.2)
const playLessVolume = (src) => {
  const sound = new Howl({src})
  sound.volume(0.1)
  sound.play()
}



//const randomTema = Math.floor(Math.random()* listaFrases.length);
//const randomFrase = Math.floor(Math.random()* listaFrases[randomTema].frases.length);
//let frase = listaFrases[randomTema].frases[randomFrase]

const nuevaFrase1 = datos.map(el => el.map(ello => ello.valor))
const nuevaFrase2 = nuevaFrase1.map(el => el.join("").trim())
const nuevaFrase = nuevaFrase2.join(" ")

const totalVidas = vidas.length
console.log(nuevaFrase)

//console.log(`aloneGame = ${aloneGame}`)
//console.log(`countPanel = ${countPanel}`)

const nombre = () =>{
  return playerOne ? name : name2;
}
const pasta = () =>{
  console.log(`esto es desde la func PASTA = ${dinero}`)
  console.log(`esto es desde la func PASTA 2 = ${dinero2}`)
  return playerOne ? dinero : dinero2;
}

const preOpenStart = () => {
  let newObj = {
    nombre: nombre(),     //new
    count: countPanel, 
    dinero: +pasta()
    } 
console.log(newObj)
setPanel(prev => [...prev, newObj]) 
  openStart()

}

useEffect(()=> {
  const resuelto = datos.every(el => el.every(elo => elo.descubierto === true))
  if(resuelto){
    soundPlay(audioClips.ganador)
    infoGanador()
    preOpenStart()}
},[datos]) 


useEffect(()=> {
  if (totalVidas === 0){ 
    soundPlay(audioClips.perder) 
    infoPerdedor()
    setInfoLine("Has perdido!! Te has quedado sin vidas!")
    preOpenStart()
    setActivateCall(false)
    setTimeout(()=>{
      infoInicial()
    },3000)  
  }
},[vidas]) 

useEffect(()=> {
  console.log("hemos tocado countPanel")
  console.log(`y ahora countPanel es = ${countPanel}`)
  if(!aloneGame && +countPanel > +select){ openStart()}
  },[countPanel]) 

  useEffect(()=> {
  console.log("hemos tocado setDinero")
  console.log(`y ahora dinero es = ${dinero}`)
  },[dinero]) 

  useEffect(()=> {
  console.log("hemos tocado setDinero2")
  console.log(`y ahora dinero2 es = ${dinero2}`)
  },[dinero2]) 

  useEffect(()=> {
    console.log("hemos tocado ranking")
    console.log(`y ahora ranking es = ${ranking[0]?.sumaDinero}`)
    localStorage.setItem("ranking", JSON.stringify(ranking))
  },[ranking]) 

  useEffect(()=> {
    console.log("hemos tocado panel")
    console.log(`y ahora panel es igual a ${panel}`)
    console.log(`y ahora panel es igual a ${panel[0]?.nombre}`)
    console.log(`y ahora panel es igual a ${panel[0]?.count}`)
    console.log(`y ahora panel es igual a ${panel[0]?.dinero}`)
  },[panel]) 


  useEffect(()=> { 
  const upper = listaFrases.map(obj => obj.frases.map(fras => {
  return fras.toUpperCase()
  }))
  const temer = listaFrases.map(obj => obj.tema)
  const nuevaPreData = []
  for ( let i = 0; i< listaFrases.length; i++){
  nuevaPreData.push({tema:temer[i],frases:upper[i]})}
  setArrayFrases(nuevaPreData)
  //console.log(nuevaFrase)
  //console.log(arrayFrases)
  const prueba = arrayFrases.map(obj => obj.frases.indexOf(nuevaFrase))
  //console.log(prueba)
    arrayFrases.map(obj => {
    if(obj.frases.indexOf(nuevaFrase) > 0){setTema(obj.tema)}else{return} 
  })
  },[nuevaFrase])


  useEffect(()=> {
    console.log("se ha tocado tema")
    console.log(`ahora el tema es ${tema}`)
    },[tema]) 

const activatePlayer = () => {
  setAloneGame(prev => !prev)
  randomStartPlayer()
}

console.log(tema)
const closeStart = () =>{
  console.log(`countPanel es igual a ${countPanel}`)
  if(+countPanel === 0 && !aloneGame){
    console.log("parte twoPlayers del closeStart")
  getoRanking()
  setPanel([])
  setDinero2(0)
  }
  console.log("parte principal del closeStart")
    setShowStart(false)
    setActivateCall(false)
    setDatos(calculoPanel(nuevaFraseNew()))
    setLetra([])
    setDinero(0)
    setPremio(null)
    setInfoLine("Gira la ruleta para empezar!")
    resetPlayer()
    setdePlayerAVida(true)


        if (vidas[0] && dePlayerAVida){
          console.log("continua la partida")
          setCountPanel(prev => prev + 1)
          setDinero2(0)
          
        }
        else if(!vidas[0] && aloneGame){
          console.log("empieza partida nueva")
          setdePlayerAVida(true)
          setVidas([true,true,true])
          setPanel([])
          setCountPanel(1)
          getoRanking()
        }
}

const resetPlayer = () => {
  setplayerOne(true)
  setplayerTwo(false)
}

const getoRanking = () => {
  console.log(`esto es el panel desde getRanking = ${+panel[0]?.dinero} `)
  const playerOnePanel = panel.filter(el => el.nombre === name)
  const playerTwoPanel = panel.filter(el => el.nombre === name2)
  console.log(`esto es playerOnePanel desde getRanking = ${playerOnePanel} `)
  console.log(`esto es playerTwoPanel desde getRanking = ${playerTwoPanel} `)
  const sumaPlayerOne = playerOnePanel.reduce((sum,el)=> sum + el.dinero, 0)
  const sumaPlayerTwo = playerTwoPanel.reduce((sum,el)=> sum + el.dinero, 0)
  console.log(`esto es sumaPlayerOne desde getRanking = ${sumaPlayerOne} `)
  console.log(`esto es sumaPlayerTwo desde getRanking = ${sumaPlayerTwo} `)

  let userOne = {name:name, numPanel: playerOnePanel.length, sumaDinero:sumaPlayerOne}
  let userTwo = {name:name2, numPanel: playerTwoPanel.length, sumaDinero:sumaPlayerTwo}
  //console.log(`esto es userOne desde getRanking = ${userOne[0].sumaDinero} `)
  //console.log(`esto es userTwo desde getRanking = ${userTwo[0].sumaDinero} `)
  if(aloneGame){
    setRanking(prev => [...prev,userOne])
  }
  else{
    setRanking(prev => [...prev,userOne, userTwo])
  }
}

const openStart = () =>{
  if(+countPanel === +select && !aloneGame){
    console.log(`pasa por el tunel de openStart`)
    setShowStart(true)
    console.log(`esto es el panel = ${panel} `)
    setActivateCall(false)
    setdePlayerAVida(false)
      console.log(panel)
      infoInicial()
      setCountPanel(0)
      setDinero2(0)
      //setAloneGame(true)
  }
  else{
    //console.log(`select del openStart = ${select}`)
    //console.log(`countPanel del openStart = ${countPanel}`)
    console.log(`aloneGame del openStart = ${aloneGame}`)
    setShowStart(true)

  }

}

console.log(name)
console.log(name2)
console.log(`esto es el panel desde app = ${panel[0]?.dinero} `)



console.log(`esto es el playerOne = ${playerOne} `)
console.log(`esto es el playerTwo = ${playerTwo} `)
//varios Two Players

const changePlayer = () => {
  if(!aloneGame){
    setplayerOne(prev => !prev)
    setplayerTwo(prev => !prev)
    setPremio(null)
  }
}

const cartera = () => {
  return playerOne ? dinero : dinero2
}
const vocalPaga = () => {
  if(playerOne){setDinero(prevDinero => prevDinero -100)}
  else {setDinero2(prevDinero2 => prevDinero2 -100)}
}
const whichPlayer = (result) => {
  if(playerOne){
    console.log(`pasa por el setTimeout, mostramos dinero =  ${dinero}`)
    setDinero(prevDinero => prevDinero + result) }
  else {
    console.log(`pasa por el setTimeout, mostramos dinero2 =  ${dinero2}`)
    setDinero2(prevDinero2 => prevDinero2 + result) 
  }
}

const twoPlayerRules = (arg) =>{
  switch(arg){
    case "x2":
      console.log(`pasa por twoPlayerRules mostramos x2 =  ${x2}`)
      if(playerOne){
        setDinero(prevDinero => prevDinero * 2)}
      else {setDinero2(prevDinero2 => prevDinero2 * 2)}
    break;

    case "vocal":
      if(playerOne){setDinero(prevDinero => prevDinero -100)}
      else {setDinero2(prevDinero2 => prevDinero2 -100)}
    break;

    case "premio":
      if(playerOne){
        console.log(`pasa por twoPlayerRules mostramos dinero =  ${dinero}`)
        setDinero(prevDinero => prevDinero + result) }
      else {
        console.log(`pasa por twoPlayerRules, mostramos dinero2 =  ${dinero2}`)
        setDinero2(prevDinero2 => prevDinero2 + result) 
      }
    break;

    case "quiebra":
      if(playerOne){setDinero(0)}
      else {setDinero2(0)}
    break;

  }
}

const premios = (tipo) => {
  if (tipo == number){
    setPremio(tipo)
  }
  else{
    setPremio(null)
  }
}

const shaker = () => {
  setShake(true)
  setTimeout(()=>{
    setShake(false)
  },1000)
}


const handleInput = (e) => { 
  const eve = e.target.value;
  const todoLibre = datos.every(el => el.every(ello => ello.acierto === false))
  console.log("introducimos letra")
      if(!todoLibre) return 

  setDichas([eve.toUpperCase()])
}
const todoLibre = () =>{
  const todoLibre = datos.every(el => el.every(ello => ello.acierto === true))
  //console.log(todoLibre)
      if(todoLibre){ setInfoLine("Compra vocal ó gira la ruleta")}  
}

const submit = (e) => {
  e.preventDefault()
  console.log("usamos la letra")
  let event = e.target[0].value;
  const regex=/[A,E,I,O,U]/ 
    const comprobacion = regex.test(event)
  if(premio === null && !comprobacion) return setInfoLine("Sólo una consonante por cada tirada de ruleta.",
                                              setDichas(""), 
                                              setTimeout(()=>{setInfoLine('Compra vocal o gira la ruleta para una nueva consonante')},2000)) 

  // que la vocal dicha, valga para acentos también.
  const eventTilde = (event) => {
    switch (event) {
      case "A":
        return "\u00c1"
        break;
        case "E":
          return "\u00c9"
          break;
          case "I":
            return "\u00cd"
            break;
            case "O":
              return "\u00d3"
              break;
              case "U":
                return "\u00da"
                break;
  }

  }

 // preparar la data segun la letra elegida
    let newMatch = []
    let confirmacionLetra = []
    for (let i = 0; i < datos.length; i++){
      const hayLetra = datos[i].some(el => el.valor === event.toUpperCase() || el.valor === eventTilde(event))
      //console.log(hayLetra)
      const aciertos = datos[i].filter(el => el.valor === event.toUpperCase() || el.valor === eventTilde(event))
      newMatch.push(aciertos)
      confirmacionLetra.push(hayLetra)

    }
    //console.log(confirmacionLetra)
    const hayLetra = confirmacionLetra.some(el => el === true)
    if (hayLetra === false){
        console.log( "esta letra no esta")
        setPremio(null)
        setInfoLine("Esa letra no está en el panel")
        soundPlay(audioClips.fallo) 
        arrayLetras()
        shaker()
          if (!aloneGame) { return changePlayer()}
          else{
              const numeroVidas = vidas.length -1;
              const newArrayVidas = []
              for (let i = 0; i < numeroVidas; i++){
                newArrayVidas.push(true)
              }
              setVidas(newArrayVidas) 
          }
    }
    else {
      console.log("esta letra si esta")

    const newMatch2 = newMatch.map(el => el.map(el => ({...el, acierto: true})))
    
    let newMatchData = []
    newMatch2.map(el => el[0] && el.map(el => newMatchData.push(el)))
    const postNewMatchData = newMatchData.map(ello => ello.id)
    setInfoLine(`Enhorabuena!, has conseguido ${newMatchData.length} aciertos!`)
    setTimeout(()=>{
      setInfoLine('Compra vocal o gira la ruleta para una nueva consonante')
      },3000)     
                  // aki se podría poner el infoLine compra vocal o tira la ruleta ( con el if que hay en ruleta )
// si repites letra pierdes vida
// si pierdes todas las vidas salta función youLoose()
// se calcula dinero segun premio, evento y aciertos
console.log(newMatchData)

const match = letra.find(el => el === event)
const numeroVidas = vidas.length -1;
//console.log(match)
  if (match) {
    //console.log("letra repetida!")
    soundPlay(audioClips.fallo)
    if (!aloneGame) { return changePlayer()}
    else{
        setInfoLine("Esta letra ya ha sido dicha!")
        shaker()
        const newArrayVidas = []
        for (let i = 0; i < numeroVidas; i++){
          newArrayVidas.push(true)
        }
        arrayLetras()
        setPremio(null)
        setVidas(newArrayVidas)
  }
  } 
  else {
    console.log("letra nueva")
    const regex=/[A,E,I,O,U]/ 
    const comprobacion = regex.test(event)

    if (comprobacion && cartera() >= 100){
      activate(postNewMatchData)
      arrayLetras()
        console.log("la vocal se paga")
        vocalPaga()
        for (let i = 0; i < newMatchData.length; i++){
          playLessVolume(audioClips.brillante) 
        }
    }
    else if (comprobacion && cartera() < 100){
      //console.log("no tienes dinero")
      setInfoLine("Las vocales cuestan 100€ y no tienes dinero!")
      setTimeout(()=> setDichas(""),1500)
      
    }
    else {
      if(x2){ twoPlayerRules("x2")}
      setx2(false)
      console.log("la consonante multiplica")
      activate(postNewMatchData)
      arrayLetras()
      //console.log(dinero)
    const result = newMatchData.length * premio
    console.log(`pasa por result = ${result}`)
    setTimeout(()=>{
      whichPlayer(result)
      soundPlay(audioClips.dinero)
    },1500)
    for (let i = 0; i < newMatchData.length; i++){
      playLessVolume(audioClips.brillante) 
    }
    event = ""
    setPremio(null)
    console.log(`pasa por el final del else, mostramos dinero =  ${cartera()}`)
    }
  }
 
}
}


  const textAreaPremio = () =>{
    const arrayRestantes = datos.map(el => el.filter(restante => restante.descubierto === false))
    const cantidadRestante = []
    const restantes = arrayRestantes.map(obj => obj.map(el => cantidadRestante.push(el)))
    const premioFinal = cantidadRestante.length * 50
    console.log(` premio final de resolver ${premioFinal}`)
    if(playerOne){
      console.log(` premio final de resolver para el playerOne ${premioFinal}`)
      setDinero(prev => prev + premioFinal) 
    }
    else {
      setDinero2(prev => prev + premioFinal) 
      console.log(` premio final de resolver para el playerTwo ${premioFinal}`)
    }
  } 

  // text-area

const submitText = (e) => {
  e.preventDefault()
  //console.log(e.target[0].value)
  if(e.target.value === false){return }
  else{

    const event = e.target[0].value.toUpperCase();
    const numeroVidas = vidas.length -1;
    //console.log(event)
    console.log("pasa por el text-area")
    //console.log(nuevaFrase)
    if ( event === nuevaFrase) { 
      //console.log("you win!")
      textAreaPremio()
      infoGanador()
      playLessVolume(audioClips.ganador)
      setInfoLine("Enhorabuena!! Has resuelto este panel!")
      setDatos(prevDatos => prevDatos.map(el => el.map(elo => ({...elo, descubierto: true}))))
      e.target[0].value = ""
    } 
    else {
      console.log("no has acertado la frase")
      soundPlay(audioClips.fallo)
      setInfoLine("Parece que has fallado!")
      e.target[0].value = ""
      shaker()

      if (!aloneGame) { 
            return changePlayer(),shaker()
      }
      else {
            const newArrayVidas = []
            for (let i = 0; i < numeroVidas; i++){
              newArrayVidas.push(true)
            }
            setVidas(newArrayVidas) 
      }
    }
  }
}

const arrayLetras = () => {
  console.log("pasa por arrayLetras")
  if (dichas) {
    setLetra( prevLetra => {return ([`${dichas}`, ...prevLetra])})
    setTimeout(()=>{setDichas("")},4000)  
  }

}

const activate = (postNewMatchData) =>{
  console.log("pasa por activate")
  for ( let i = 0; i < postNewMatchData.length; i++){
    setDatos(prevDatos => prevDatos.map(el => el.map(ello => {
      if ( ello.id === postNewMatchData[i]){
        
        return {...ello, acierto: true }
      }else {return ello}
    })))
  } 
}

const handleName = (e) => {
  console.log("pasa por handleName")
setName(e.target.value)
}
const handleName2 = (e) => {
  console.log("pasa por handleName2")
setName2(e.target.value)
}
const handleSelect = (e) => {
  console.log("pasa por handleSelect")
  console.log(`este es el valor de target.value = ${e.target.value}`)
  setSelect(e.target.value)
}
console.log(`la ronda es de ${select} partidas`)

  return (
    <div>
  { ShowStart && <Start handleSelect={handleSelect} aloneGame={aloneGame} activatePlayer={activatePlayer} activateCall={activateCall} activateCall2={activateCall2} ganador={ganador} name={name} handleName={handleName} handleName2={handleName2} closeStart={closeStart} setShowStart={setShowStart}/>}
  <Panel soundPlay={soundPlay} audioClips={audioClips} datos={datos} setDatos={setDatos} setDichas={setDichas} letra={letra} />
  <Presentador shake={shake} infoLine={infoLine}/>
  <Ruleta premios={premios} setx2={setx2} twoPlayerRules={twoPlayerRules} changePlayer={changePlayer} premio={premio} soundPlay={soundPlay} audioClips={audioClips} setInfoLine={setInfoLine} datos={datos} setPremio={setPremio} setDinero={setDinero}/>
  <Player name={name} name2={name2} playerOne={playerOne} playerTwo={playerTwo} aloneGame={aloneGame} submitText={submitText}vidas={vidas} letra={letra} submit={submit} handleInput={handleInput} dichas={dichas} setDichas={setDichas} dinero={dinero} dinero2={dinero2}/>
  <Footer tema={tema} ranking={ranking} setRanking={setRanking} panel={panel} listaFrases={listaFrases} />
    </div>
  )
}

export default App

