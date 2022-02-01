import React from 'react'
import './ScrollToTop.css'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'
const ScrollToTop = () => {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className="scrollTotop" onClick={handleTop}>
      <BsFillArrowUpSquareFill />
    </div>
  )
}

export default ScrollToTop
