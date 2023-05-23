import React from 'react'

function Button(props) {
  return (
    <div>
      <button onClick={props.onclick}>{props.name}</button>
    </div>
  )
}

export default Button
