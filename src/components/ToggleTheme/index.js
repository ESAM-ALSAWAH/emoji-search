import React, { useEffect, useState } from 'react'
import './ToggleTheme.css'
import { FiSun } from 'react-icons/fi'
import { WiMoonAltNew } from 'react-icons/wi'
const ToggleTheme = () => {
  const [theme, settheme] = useState(() => {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    return 'light'
  })
  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  const handleToggle = (event) => {
    event.target.classList.toggle('toggle')
    settheme((theme) => (theme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="theme-container">
      <div className="button-theme" onClick={(event) => handleToggle(event)}>
        <FiSun />
        <WiMoonAltNew />
      </div>

      <p>Switch to your preferred theme.</p>
    </div>
  )
}

export default ToggleTheme
