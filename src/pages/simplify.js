import * as React from "react"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectsOther from "../components/projects-other"

const Project1 = () => {
  const [visible, setVisible] = useState(false)
  setTimeout(() => {
    setVisible(true)
  }, 300)

  const [imagesVisible, setImagesVisible] = useState(false)
  setTimeout(() => {
    setImagesVisible(true)
  }, 600)

  return (
    <Layout>
      <Seo title="Simplifying Integration" />
      <div className="project">
        <div className={`project__text ${visible ? "content-visible" : ""}`}>
          <h1>Simplifying Integration</h1>
          <p>Reducing Cognitive Load in a Technical Tool — UX/UI Case Study</p>
        </div>
        <div
          className={`project__container ${
            imagesVisible ? "content-visible" : ""
          }`}
        >
          <StaticImage
            className="project__container--img"
            src="../images/project-4/0.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="1"
          />

          <div className={`project__text ${visible ? "content-visible" : ""}`}>
            <p className="project__text--info">
              To view the full case study, please{" "}
              <a className="project__text--info-link" href="#contact">
                get in touch
              </a>{" "}
              👇 with me. Thank you!
            </p>
          </div>
        </div>
      </div>
      <ProjectsOther />
    </Layout>
  )
}

export default Project1
