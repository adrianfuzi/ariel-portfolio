import * as React from "react"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import resume from "../assets/cv_ariel_korsten.pdf"

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
              connection and research, problem-solving, and technology—all
              things that I enjoy!
            </p>
            <p>
              I love working on tricky, technical topics and projects and
              turning them into simple, user-friendly digital experiences that
              anyone can get the hang of. Each project's unique challenges keep
              me on my toes, and there's nothing better than seeing design make
              a real difference.
            </p>
            <p>
              When I’m not coming up with design solutions, you can find me
              baking in my urban jungle flat, cruising the countryside on a
              bicycle tour with my husband, or out at the lake with my friends
              and few Bavarian beers.
            </p>
            <a
              className="btn about__main--button"
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              See resume
            </a>
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
          {/* Enable to show skills section: */}
          {/* <div className="about__skills--category">
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
              <li>Listening</li>
              <li>Adaptability</li>
            </ul>
          </div>
          <div className="about__skills--category">
            <h3>Main Tools</h3>
            <ul>
              <li>Pen & Paper</li>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Canva</li>
              <li>Balsamiq</li>
            </ul>
          </div> */}
        </div>
      </div>
    </Layout>
  )
}

export default About
