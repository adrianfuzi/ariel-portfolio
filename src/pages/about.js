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
            <h3>Hi, I’m Ariel!</h3>
            <p>
              I’m a UX/UI Designer based in Munich. From my time working in a
              nonprofit, I knew that I wanted to continue to work with and help
              people, but I never thought I’d be able to do it in a way like
              user experience design. It’s the perfect meld of people-based
              connection and research, problem-solving, and technology -- all
              things that I enjoy! Since moving to Germany from the US, I’ve
              been challenged with learning a new language and integrating into
              a new culture. Now that I’ve accomplished that, I’ve turned my
              focus towards changing careers where I can use my skills and
              interests in an ever-evolving field of work.
            </p>
            <p>
              I recently completed a nine-month, intensive project-based UX
              training program through CareerFoundry, which focused on areas of
              study such as user research, personas, user flows and journeys,
              prototyping, information architecture, and visual design
              fundamentals.
            </p>
            <p>
              When I’m not coming up with design solutions, you can find me
              baking in my urban jungle flat, cruising the countryside on a
              bicycle tour with my husband, or out at the lake with my friends
              and few Bavarian beers.
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
