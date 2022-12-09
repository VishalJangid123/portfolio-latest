import React from 'react'
import "./skills.css"
import Language from './Language'
import Software from './Software'
import SoftwarePackage from './SoftwarePackage'
import Database from './Database'

const Skills = () => {
  return (
    <section className="about section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle"> I enojoy working on</span>
      <div className="skills__container container grid">
        <Language />
        <Software />
        <SoftwarePackage />
        <Database />
       
      </div>
    </section>
  )
}

export default Skills