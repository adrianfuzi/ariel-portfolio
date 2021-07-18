import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  const [visible, setVisible] = useState(false)
  setTimeout(() => {
    setVisible(true)
  }, 300)

  const [skillsVisible, setSkillsVisible] = useState(false)
  setTimeout(() => {
    setSkillsVisible(true)
  }, 600)

  return (
    <Layout>
      <Seo title="About" />
      <div className="about">
        <div className="about__main">
          <div
            className={`about__main--text ${visible ? "content-visible" : ""}`}
          >
            <h1>About me</h1>
            <p>
              Ut eget metus in enim dictum tempor vitae ut enim. Sed malesuada
              condimentum accumsan. Ut ligula ligula, faucibus ac blandit a,
              condimentum et velit. Proin quis ullamcorper sapien. Etiam aliquet
              in quam eget convallis. Nulla tempor tortor vitae molestie
              volutpat. Sed et nisi nulla. Maecenas luctus venenatis rutrum.
              Mauris sed molestie orci. Donec eget sem blandit massa feugiat
              commodo vitae ut metus. Morbi euismod enim vitae turpis porttitor
              semper. Aliquam quis odio et mi porttitor posuere eget vel urna.
              In luctus ornare tempus. Praesent faucibus sem vitae sem bibendum
              tempus. Nunc venenatis luctus aliquam. Nulla facilisi.
            </p>
            <Link className="btn about__main--button" to="#projects">
              Resume
            </Link>
          </div>
          <div className="about__main--image">
            <StaticImage
              src="../images/ariel.png"
              width={300}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Image Ariel"
            />
          </div>
        </div>
        <div
          className={`about__skills ${skillsVisible ? "content-visible" : ""}`}
        >
          <div className="about__skills--category">
            <h3>UX/UI Design</h3>
            <ul>
              <li>UX Research</li>
              <li>User Personas</li>
              <li>User Flows</li>
              <li>Usability Testing</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Visual Design</li>
            </ul>
          </div>
          <div className="about__skills--category">
            <h3>Soft Skills</h3>
            <ul>
              <li>Communication</li>
              <li>Empathy</li>
              <li>Organization</li>
              <li>Critical Thinking</li>
              <li>Problem Solving</li>
            </ul>
          </div>
          <div className="about__skills--category">
            <h3>Main Tools</h3>
            <ul>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>InVision</li>
              <li>Pen & Paper</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
