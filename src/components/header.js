import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Hamburger from "./hamburger"

const Header = ({ siteTitle }) => {
  // Header drop shadow
  if (typeof window !== `undefined`) {
    const body = document.body
    let lastScroll = 0

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset
      if (currentScroll <= 0) {
        body.classList.remove("shadow")
        return
      }
      if (currentScroll > lastScroll) {
        body.classList.add("shadow")
        return
      }
    })
  }

  return (
    <header>
      <div className="header__nav">
        <div className="header__nav--title">
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
        </div>
        <ul className="header__nav--items">
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <Hamburger />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
