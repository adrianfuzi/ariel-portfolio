import * as React from "react"
import { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Projects from "../components/projects"
import blob2 from "../images/blob2.png"

const IndexPage = () => {
  const [visible, setVisible] = useState(false)
  setTimeout(() => {
    setVisible(true)
  }, 300)

  return (
    <Layout>
      <Seo title="Home" />
      <div className="hero">
        <div className={`hero__text ${visible ? "content-visible" : ""}`}>
          <h1>Hi, I'm Ariel! </h1>
          <p>
            I'm a Munich-based UX/UI designer who enjoys turning complex,
            technical subjects into easy-to-use and intuitive digital products.
          </p>
          <a className="btn hero__text--button" href="#projects">
            Projects
          </a>
        </div>
        <img
          className="hero__illustration"
          src={blob2}
          alt="Hero Illustration"
        ></img>
      </div>
      <Projects />
    </Layout>
  )
}

export default IndexPage
