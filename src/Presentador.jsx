import React from 'react'
import "animate.css"

export function Presentador({infoLine, shake}) {

console.log(shake)

  return (
    <div className={shake ? "animate__animated animate__bounceIn" : ""} id="presentador">
      {infoLine}
    </div>
  )
}
