import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "../styles/style.scss"

const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <>
      <Header siteTitle="Ariel Korsten" />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
