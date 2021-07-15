/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/style.scss"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Ariel Korsten`} /> */}
      <Header siteTitle="Ariel Korsten" />
      <div>
        <main>{children}</main>
        <Footer />
        {/* <footer>
          <p>© {new Date().getFullYear()} Ariel Korsten</p>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
