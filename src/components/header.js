import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
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
          <Link to="#contact">Contact</Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
