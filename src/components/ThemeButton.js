import React from "react"

const ThemeButton = ({ bgColor, setter }) => {

    const handleClick = () => {
        setter(e => !e)
    }

  return (
    <div onClick={handleClick} className="ThemeButton" style={{ background: bgColor }}>
        
    </div>
  )
}

export default ThemeButton