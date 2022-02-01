import React from 'react'
import { ToggleTheme } from '..'
import './Header.css'

const Header = () => {
  return (
    <header>
      <h1>Emoji Search 🦄</h1>
      <p>A simple emoji search tool made with ReactJS.</p>
      <ToggleTheme />
    </header>
  )
}

export default Header
