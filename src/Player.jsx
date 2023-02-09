import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export function Player({name,name2,playerOne, playerTwo, aloneGame, submitText,vidas,dinero,dinero2, dichas, handleInput, submit, letra}) {

  const switchDinero = () =>{
    if(aloneGame){ return"cartera-alone"} else if(playerOne){ return "resaltada cartera"}else{return "cartera"}
  }
  const switchDineroTwo = () =>{
    if(playerTwo){ return"resaltada cartera2"} else if(aloneGame){ return "noShow"}else{return "cartera2"}
  }

  const onKeyUpevent = (e) => {
    let keycode = e.keyCode;
    if(keycode == '13'){
      console.log('You pressed a "enter" key in textbox'); 
    }
  }

  return (
    <div className="player">
      <div className="flex">
      <span className='nombre'>{playerOne === true && name }</span>
      <span className='nombre2'>{playerTwo === false && name2 }</span>
        <form className="form" onSubmit={submit}>
            <input 
                onKeyUp={(e)=>onKeyUpevent(e)}
                id="letraInput"
                maxLength="1"
                className="input-letra"
                value={dichas} 
                onChange={handleInput}>
            </input>
            <button className="btn1" style={{cursor:"pointer"}} type="submit">Usar Letra</button>
        </form>
        <div className="letras-dichas">{`${letra} `} </div>
        <div className={switchDinero()}> {dinero?dinero:0} </div>
        <div className={switchDineroTwo()}> {dinero2?dinero2:0} </div>
        <div className={aloneGame?"vidas" : "noShow"}>
          <span>{vidas[2]? <AiFillHeart color='red'/> : <AiOutlineHeart color='red'/>}</span>
          <span>{vidas[1]? <AiFillHeart color='red'/> : <AiOutlineHeart color='red'/>}</span>
          <span>{vidas[0]? <AiFillHeart color='red'/> : <AiOutlineHeart color='red'/>}</span>
        </div>
      </div>
      <form className="flex" onSubmit={submitText}>
        <textarea onKeyUp={(e)=>onKeyUpevent(e)}></textarea>
        <button className="btn" style={{cursor:"pointer"}}>Resuelvo!</button>
      </form>
    </div>
  )
}


{/* return (
  <div className="player">
    <div className="flex">
      <form className="form" onSubmit={submit}>
          <input 
              maxLength="1"
              className="input" 
              value={dichas} 
              onChange={handleInput}>
          </input>
          <button className="btn1" style={{cursor:"pointer"}} type="submit">Usar Letra</button>
      </form>
      <div className="letras-dichas">{`${letra} `} </div>
      <div className="cartera"> {dinero?dinero:0} </div>
      <div className="vidas">
        <span>{vidas[2]? <AiFillHeart color='red'/> : <AiOutlineHeart color='red'/>}</span>
        <span>{vidas[1]? <AiFillHeart color='red'/> : <AiOutlineHeart color='red'/>}</span>
        <span>{vidas[0]? <AiFillHeart color='red'/> : <AiOutlineHeart color='red'/>}</span>
      </div>
    </div>
    <div className="flex">
      <textarea></textarea>
      <button className="btn" style={{cursor:"pointer"}}>Resuelvo!</button>
    </div>
  </div>
)
*/}