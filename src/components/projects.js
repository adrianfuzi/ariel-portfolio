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
          <h3>Simplifying Integration</h3>
          <p className="projects__card--tags">
            UX/UI design - User research - Cognitive load reduction
          </p>
          <p>
            In this case study, I showcase the complex task of designing an
            intuitive interface for an information-heavy integration tool.
            Drawing inspiration from a tax app's single-task focus approach, I
            aimed to minimize cognitive load for users, asking them to focus on
            one task at a time.
          </p>
          <Link className="btn projects__card--text-btn" to="/simplify">
            View project
          </Link>
        </div>
        <StaticImage
          className="projects__card--image"
          src="../images/project-4/cover.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Project 4 Cover"
        />
      </div>

      <div className="projects__card">
        <StaticImage
          className="projects__card--image"
          src="../images/project-1/cover.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Project 2 Cover"
        />
        <div className="projects__card--text">
          <h3>HandyHelper</h3>
          <p className="projects__card--tags">
            UX/UI design - Responsive web app - Visual design
          </p>
          <p>
            HandyHelper is a mobile app that connects people to professional
            tradesmen.
          </p>
          <Link className="btn projects__card--text-btn" to="/handyhelper">
            View project
          </Link>
        </div>
      </div>

      <div className="projects__card">
        <div className="projects__card--text">
          <h3>Perfect Properties</h3>
          <p className="projects__card--tags">
            UX/UI design - Responsive web app - Visual design
          </p>
          <p>
            Perfect Properties is a responsive web app that makes it easy to
            find investment real estate properties.
          </p>
          <Link
            className="btn projects__card--text-btn"
            to="/perfectproperties"
          >
            View project
          </Link>
        </div>
        <StaticImage
          className="projects__card--image"
          src="../images/project-2/cover.png"
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
