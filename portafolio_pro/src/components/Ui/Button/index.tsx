import React from 'react'
import "./index.css"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  colorClass?: string // clase para el color
}

const Button: React.FC<ButtonProps> = ({ children, onClick, colorClass = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`button-profile px-4 py-2 ${colorClass}`}
    >
      {children}
    </button>
  )
}

export default Button
