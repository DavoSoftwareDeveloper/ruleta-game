import React from 'react'
import logo from "./images/logo.png"
import Confetti from 'react-confetti'

export function Start({handleSelect,aloneGame,closeStart,name,name2,handleName,handleName2, ganador,activateCall,activateCall2,activatePlayer}) {


  return (
    <aside className='start-overlay'>
       { ganador.win && <Confetti
      width={"1000rem"}
      height={"1000rem"}
    /> }
        <div className='start-container'>
            <img  className="start-img" src={logo}/>
              <h2>{ganador.title}</h2>
                  <div className='start-content'>
                    <div>
                      <button className="close-btn" onClick={closeStart}>Nueva Partida</button>  
                      <button className="close-btn player-btn" onClick={activatePlayer}>2 Players</button>  
                      <div className={!aloneGame && !activateCall2?"selector":"noShow"}>
                        <label htmlFor="duration"> Al mejor de: </label>
                        <select name="duration" id="duration" onChange={handleSelect}>
                          <option value="10">1</option>
                          <option value="1">3</option>
                          <option value="3">5</option>
                          <option value="5">10</option>
                        </select>
                      </div>
                    </div>
                    <div>
                        <p className='info-start'>{ganador.text}</p>
                        <div className={!activateCall? "flexer" : 'hide-content'}> 
                          <div className="flexer2">
                            <p>Nombre Player 1:</p>
                            <input className='input-start' 
                                    type="text" 
                                    value={name} 
                                    maxLength="8"
                                    onChange={handleName}></input>
                          </div>
                          <div className={!aloneGame && !activateCall2? "flexer2":"noShow"}>
                            <p>Nombre Player 2:</p>
                            <input className='input-start' 
                                    type="text" 
                                    value={name2} 
                                    maxLength="8"
                                    onChange={handleName2}></input>
                          </div>
                        </div>
                    </div>
                  </div>
          </div>
    </aside>
  )
}
