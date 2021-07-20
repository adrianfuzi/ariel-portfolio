import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div
        className={`burger ${isOpen ? "burger__change" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={() => setIsOpen(!isOpen)}
        role="button"
      >
        <div className="burger__bar-1" />
        <div className="burger__bar-2" />
        <div className="burger__bar-3" />
      </div>
      <div className={`burger-menu ${isOpen ? "burger-menu-visible" : ""}`}>
        <ul className="burger-menu__nav">
          <li className="burger-menu__nav-link">
            <Link to="/" onClick={() => setIsOpen(!isOpen)}>
              Projects
            </Link>
          </li>
          <li className="burger-menu__nav-link">
            <Link to="/about" onClick={() => setIsOpen(!isOpen)}>
              About
            </Link>
          </li>
          <li className="burger-menu__nav-link">
            <a href="#contact" onClick={() => setIsOpen(!isOpen)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hamburger
