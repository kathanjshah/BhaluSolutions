import React from 'react'
import  "./pixelButton.css";

function PixelButton(props) {
  return (
      <a className="pixelButton" href={props.link}>Contact Us</a>
  )
}

export default PixelButton
