import * as React from "react"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectsOther from "../components/projects-other"

const Project2 = () => {
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
      <Seo title="Perfect Properties" />
      <div className="project">
        <div className={`project__text ${visible ? "content-visible" : ""}`}>
          <h1>Perfect Properties</h1>
          <p>UX/UI Case Study</p>
        </div>

        <div
          className={`project__container ${
            imagesVisible ? "content-visible" : ""
          }`}
        >
          <StaticImage
            className="project__container--img"
            src="../images/project-2/1.png"
            width={1400}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="1"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-2/2.png"
            width={1400}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="1"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-2/3.png"
            width={1400}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="1"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-2/4.png"
            width={1400}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="1"
          />
          <div className="project__container--video">
            <iframe
              src="https://www.youtube.com/embed/ltj0sAPZwoA"
              title="Perfect Properties"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <StaticImage
            className="project__container--img"
            src="../images/project-2/5.png"
            width={1400}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="1"
          />
        </div>
      </div>
      <ProjectsOther />
    </Layout>
  )
}

export default Project2
