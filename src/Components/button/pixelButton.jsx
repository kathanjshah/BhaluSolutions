import React from 'react'
import  "./pixelButton.css";

function PixelButton(props) {
  return (
      <a className="pixelButton" href={props.link}>Hover</a>
  )
}

export default PixelButton
