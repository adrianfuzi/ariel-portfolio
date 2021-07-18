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
            Phasellus sem tellus, mollis eu iaculis a, sollicitudin in est.
            Donec fermentum tempus maximus. Curabitur nisl ex.
          </p>
          <Link className="btn projects__card--text-btn" to="/project-1">
            View Project
          </Link>
        </div>
        <StaticImage
          className="projects__card--image"
          src="../images/project-1.jpg"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Project 1 Image"
        />
      </div>

      <div className="projects__card">
        <StaticImage
          className="projects__card--image"
          src="../images/project-2.jpg"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Project 1 Image"
        />
        <div className="projects__card--text">
          <h3>Project 2</h3>
          <p>
            Nam tristique, tellus at aliquam rutrum, magna mauris dapibus nulla,
            ut ultrices eros ligula tristique orci.
          </p>
          <Link className="btn projects__card--text-btn" to="/project-1">
            View Project
          </Link>
        </div>
      </div>

      <div className="projects__card">
        <div className="projects__card--text">
          <h3>Project 3</h3>
          <p>
            Nullam feugiat, turpis a malesuada finibus, leo dolor lobortis
            lectus, quis sagittis arcu felis et urna.
          </p>
          <Link className="btn projects__card--text-btn" to="/project-1">
            View Project
          </Link>
        </div>
        <StaticImage
          className="projects__card--image"
          src="../images/project-3.jpg"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Project 1 Image"
        />
      </div>
    </div>
  )
}

export default Projects
