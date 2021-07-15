import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Projects from "../components/project"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="hero">
      <div className="hero__text">
        <h1>Hello, my name is Ariel Korsten</h1>
        <p>
          I'm a Munich based UX/UI designer with a passion for creating user
          centric experiences and interfaces.
        </p>
        <Link className="btn hero__text--button" to="#projects">
          Projects
        </Link>
      </div>
      <StaticImage
        className="hero__image"
        src="../images/blob.png"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Ariel"
      />
    </div>
    <Projects />
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
