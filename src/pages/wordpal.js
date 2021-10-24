import * as React from "react"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectsOther from "../components/projects-other"

const Project3 = () => {
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
      <Seo title="WordPal" />
      <div className="project">
        <div className={`project__text ${visible ? "content-visible" : ""}`}>
          <h1>WordPal</h1>
          <p>UX/UI Case Study</p>
        </div>

        <div
          className={`project__container ${
            imagesVisible ? "content-visible" : ""
          }`}
        >
          <StaticImage
            className="project__container--img"
            src="../images/project-3/0.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="WordPal Cover"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-3/1.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Overview"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-3/2.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Process"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-3/3.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Emphatize"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-3/4.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="User Persona"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-3/5.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="User Stories"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-3/6.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Problem Statement and Solution"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-3/7.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="User Flow 1"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-3/8.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="User Flow 2"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-3/9.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Wireframes"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-3/10.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Usability Testing"
          />
          <div className="project__container--video">
            <iframe
              src="https://www.youtube.com/embed/D0niaFEw0z4"
              title="Wordpal Demo 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="project__container--video">
            <iframe
              src="https://www.youtube.com/embed/Gnf4XcAgKRs"
              title="Wordpal Demo 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <StaticImage
            className="project__container--img"
            src="../images/project-3/11.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Main Takeaways"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-3/12.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Style Guide"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-3/13.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Final Screens"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-3/14.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Thank You"
          />
        </div>
      </div>
      <ProjectsOther />
    </Layout>
  )
}

export default Project3
