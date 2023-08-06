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
          <iframe
            className="project__container--iframe"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FpXAh4ebLnWVIOnIf1Lo8XG%2FHandyHelper%253A-An-App-That-Empowers-People-to-Improve-Their-Homes%3Ftype%3Ddesign%26node-id%3D1-8%26t%3DL3JRspKgZxrLn1Ol-1%26scaling%3Dcontain%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A8%26mode%3Ddesign"
            allowfullscreen
          ></iframe>

          <div className={`project__text ${visible ? "content-visible" : ""}`}>
            <p>Full demo:</p>
          </div>

          <div className="project__container--video">
            <iframe
              src="https://www.youtube.com/embed/BTds1J6yaQo"
              title="HandyHelper"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <ProjectsOther />
    </Layout>
  )
}

export default Project1
