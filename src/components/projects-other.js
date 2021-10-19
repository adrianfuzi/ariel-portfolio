import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { globalHistory } from "@reach/router"

const ProjectsOther = () => {
  const currentPath = globalHistory.location.pathname
  const p1 = "/handyhelper"
  const p2 = "/perfectproperties"

  if (currentPath === p1) {
    return (
      <>
        <div className="other">
          <h3>See Other Projects</h3>
          <div className="other__container">
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

            <div className="other__container--card">
              <Link>
                <StaticImage
                  className="other__container--card-img"
                  src="../images/project-3/cover.png"
                  width={300}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="WordPal"
                />
                <p>WordPal</p>
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
              <Link>
                <StaticImage
                  className="other__container--card-img"
                  src="../images/project-3/cover.png"
                  width={300}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="WordPal"
                />
                <p>WordPal</p>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <h3>See Other Projects</h3>
        <div className="other">
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
      </>
    )
  }
}

export default ProjectsOther
