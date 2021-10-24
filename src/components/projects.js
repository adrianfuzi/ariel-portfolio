import * as React from "react"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Projects = () => {
  const [visible, setVisible] = useState(false)
  setTimeout(() => {
    setVisible(true)
  }, 600)

  return (
    <div className={`projects ${visible ? "content-visible" : ""}`}>
      <div id="projects"></div>
      <h2>Projects</h2>
      <div className="projects__card">
        <div className="projects__card--text">
          <h3>HandyHelper</h3>
          <p>
            HandyHelper is an app that connects people to professional
            tradesmen. It allows users to hire a professional to complete a
            project for them as well as to contact a professional via a video or
            phone call to receive advice and guidance about their DIY (do it
            yourself) home improvement project. The goal of HandyHelper is to
            empower its users to complete improvements to their homes.
          </p>
          <Link className="btn projects__card--text-btn" to="/handyhelper">
            View Project
          </Link>
        </div>
        <StaticImage
          className="projects__card--image"
          src="../images/project-1/cover.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Project 1 Cover"
        />
      </div>

      <div className="projects__card">
        <StaticImage
          className="projects__card--image"
          src="../images/project-2/cover.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Project 2 Cover"
        />
        <div className="projects__card--text">
          <h3>Perfect Properties</h3>
          <p>
            Perfect Properties is a responsive web app that makes it easy to
            find investment real estate properties.
          </p>
          <Link
            className="btn projects__card--text-btn"
            to="/perfectproperties"
          >
            View Project
          </Link>
        </div>
      </div>

      <div className="projects__card">
        <div className="projects__card--text">
          <h3>WordPal</h3>
          <p>
            WordPal is a learning application that allows people to create their
            own custom flashcards. No frills, just simple, practical learning.
          </p>
          <Link className="btn projects__card--text-btn" to="/wordpal">
            View Project
          </Link>
        </div>
        <StaticImage
          className="projects__card--image"
          src="../images/project-3/cover.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Project 3 Cover"
        />
      </div>
    </div>
  )
}

export default Projects
