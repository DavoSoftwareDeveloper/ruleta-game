import React, {useState} from 'react'
import { Panel } from './Panel'



export function Footer({tema,listaFrases, panel,ranking,setRanking}) {

const rankingOrder = () => {
    ranking?.sort((b,a)=> a.sumaDinero - b.sumaDinero)
    ranking.map(el => {
        if ( ranking.length > 3){setRanking(prev => prev.slice(0,3))}
    })
}
rankingOrder()

const calculoNum = (index) =>{
    switch(index){
        case 0:
            return "1st";
            break;
        case 1:
            return "2nd";
            break;
        case 2:
            return "3rd";
            break;
            default:
                return "*"
        }
}

   // console.log("re-render hijos")
   
  return (
    <div className= "footer">

        <div >
            <h3>Temas</h3>
            <ul>
                {listaFrases.map((el,index )=> {
                    return <li key={index+100} className={tema === el.tema ?'temaBold':"temas"}>{el.tema}</li>
                })}
            </ul>
        </div>
        <div >
            <h3>Paneles </h3>
            <ul>
              {panel?.map(el => {
                return <li key={el.count}>{el.nombre} - <span className="bold">{`panel ${el.count}`}</span>{`=> ${el.dinero}€`}</li>
              })}

            </ul>
        </div>
        <div >
            <h3>Mejores resultados</h3>
            <ul>
                {ranking?.map((el,index) => {
                    return <li key={index}>{`<< `}<span className="bold">{calculoNum(index)}</span>
                    {` >>  `}<span className="bold">{el.name}</span>{` -  paneles `}<span className="bold">{el.numPanel}</span>
                    {` -  Total:`} <span className="bold">{`${el.sumaDinero}€`}</span></li>
                })}

            </ul>
        </div>

    </div>
  )
}

