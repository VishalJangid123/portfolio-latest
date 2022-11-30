import React from 'react'
import "./skills.css"
import Frontend from './Frontend'

const Skills = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle"> Technical Stack Enojoy working on</span>
      <div className="skills__container container grid">

        <Frontend />
      </div>
    </section>
  )
}

export default Skills