import * as React from "react"
import { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Projects from "../components/project"
import blob from "../images/blob.svg"

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
          <h1>Hello, my name is Ariel Korsten</h1>
          <p>
            I'm a Munich based UX/UI designer with a passion for creating user
            centric experiences and interfaces.
          </p>
          <a className="btn hero__text--button" href="#projects">
            Projects
          </a>
        </div>
        <img
          className="hero__illustration"
          src={blob}
          alt="Hero Illustration"
        ></img>
      </div>
      <Projects />
    </Layout>
  )
}

export default IndexPage
