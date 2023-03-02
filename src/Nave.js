import React from 'react'
import { useState, useEffect } from 'react'
import {Row,Col} from 'react-bootstrap'
import './Nav.css'
function Nave() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else setShow(false)
    })
    return () => {
      window.removeEventListener("scroll", () => {})
    }
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
     <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
      />
    </div>
  )
}

export default Nave