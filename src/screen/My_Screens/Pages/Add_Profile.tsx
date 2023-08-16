import React from 'react'
import Education from '../Components/Education/Education'
import Experience from '../Components/Experence/Experience'
import Skills from '../Components/Skill/Skills'

function Add_Profile() {
  return (
    <div className='full-add-sec'>
      <div className='add-edu-sec'>
        <Education/>
      </div>
      <div className='add-exp-sec'>
        <Experience/>
      </div>
      <div className='add-skills-sec'>
        <Skills/>
      </div>
      
    </div>
  )
}

export default Add_Profile
