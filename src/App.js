import React, { useEffect, useState } from 'react'
import './App.css'

import { Header, Search, ScrollToTop } from './components'
const App = () => {
  const [ScrollY, setScrollY] = useState(0)
  useEffect(() => {
    const scrollEvent = () => setScrollY(window.scrollY)
    document.addEventListener('scroll', scrollEvent)
  })
  return (
    <React.Fragment>
      <Header />
      <Search />
      {ScrollY > 200 && <ScrollToTop />}
    </React.Fragment>
  )
}

export default App
