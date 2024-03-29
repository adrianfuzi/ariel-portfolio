import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { globalHistory } from "@reach/router"

const ProjectsOther = () => {
  const currentPath = globalHistory.location.pathname
  const p1 = "/simplify"
  const p2 = "/handyhelper"

  if (currentPath === p1) {
    return (
      <>
        <div className="other">
          <h3>See Other Projects</h3>
          <div className="other__container">
            <div className="other__container--card">
              <Link to="/handyhelper">
                <StaticImage
                  className="other__container--card-img"
                  src="../images/project-1/cover.png"
                  width={300}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="HandyHelper"
                />
                <p>HandyHelper</p>
              </Link>
            </div>

            <div className="other__container--card">
              <Link to="/perfectproperties">
                <StaticImage
                  className="other__container--card-img"
                  src="../images/project-2/cover.png"
                  width={300}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Perfect Properties"
                />
                <p>Perfect Properties</p>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  } else if (currentPath === p2) {
    return (
      <>
        <div className="other">
          <h3>See Other Projects</h3>
          <div className="other__container">
            <div className="other__container--card">
              <Link to="/simplify">
                <StaticImage
                  className="other__container--card-img"
                  src="../images/project-4/cover.png"
                  width={300}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Simplifying Integration"
                />
                <p>Simplifying Integration</p>
              </Link>
            </div>

            <div className="other__container--card">
              <Link to="/perfectproperties">
                <StaticImage
                  className="other__container--card-img"
                  src="../images/project-2/cover.png"
                  width={300}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Perfect Properties"
                />
                <p>Perfect Properties</p>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="other">
          <h3>See Other Projects</h3>
          <div className="other__container">
            <div className="other__container--card">
              <Link to="/simplify">
                <StaticImage
                  className="other__container--card-img"
                  src="../images/project-4/cover.png"
                  width={300}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Simplifying Integration"
                />
                <p>Simplifying Integration</p>
              </Link>
            </div>

            <div className="other__container--card">
              <Link to="/handyhelper">
                <StaticImage
                  className="other__container--card-img"
                  src="../images/project-1/cover.png"
                  width={300}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="HandyHelper"
                />
                <p>HandyHelper</p>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ProjectsOther
