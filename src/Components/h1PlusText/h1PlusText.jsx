import React from 'react'

function H1PlusText(props) {
  return (
    <div className='h1plusText'>
      <h1 className="h1heading">
        {props.heading}
      </h1>
      <p className='paraText'>
        {props.text}
      </p>
    </div>
  )
}

export default H1PlusText
