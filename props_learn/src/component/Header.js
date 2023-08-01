import React from 'react'

const Header = (props) => {
    console.log(props)
  return (
    <div>hello there indeed, {props.name}, {props.color}</div>
  )
}

export default Header