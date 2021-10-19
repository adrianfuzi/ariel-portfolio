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
      <Seo title="HandyHelper" />
      <div className="project">
        <div className={`project__text ${visible ? "content-visible" : ""}`}>
          <h1>HandyHelper</h1>
          <p>UX/UI Case Study</p>
        </div>
        <div
          className={`project__container ${
            imagesVisible ? "content-visible" : ""
          }`}
        >
          <StaticImage
            className="project__container--img"
            src="../images/project-1/1.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="1"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-1/2.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="2"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-1/3.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="3"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-1/4.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="4"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-1/5.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="5"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-1/6.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="6"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-1/7.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="7"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-1/8.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="8"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-1/9.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="9"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-1/10.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="10"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-1/11.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="11"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-1/12.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="12"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-1/13.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="13"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-1/14.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="14"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-1/15.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="15"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-1/16.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="16"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-1/17.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="17"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-1/18.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="18"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-1/19.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="19"
          />
          <StaticImage
            className="project__container--img"
            src="../images/project-1/20.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="20"
          />
          <div className="project__container--video">
            <iframe
              src="https://www.youtube.com/embed/BTds1J6yaQo"
              title="HandyHelper"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <StaticImage
            className="project__container--img"
            src="../images/project-1/21.png"
            width={1200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="21"
          />
        </div>
      </div>
      <ProjectsOther />
    </Layout>
  )
}

export default Project1
