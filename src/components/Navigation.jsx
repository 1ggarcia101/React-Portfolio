import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Navigation = (props) => {
  return (
    <>
<section className="sidebar">
  <nav>
    <ul>
      <li>
        <a href = "#About" className="about-button button" onClick={()=>props.setCurrentPage("About")}>About</a>
      </li>
      <li>
      <a href="#Portfolio" className="projects-button button" onClick={()=>props.setCurrentPage("Portfolio")}>Portfolio</a>
      </li>
      <li>
        <a href="#Contact" className="contact-button button" onClick={()=>props.setCurrentPage("Contact")}>Contact</a>
      </li>
      <li>
        <a href="#Resume" className="resume-button button" onClick={()=>props.setCurrentPage("Resume")}>Resume</a>
      </li>
    </ul>
  </nav>
</section>
    </>
  )
}

export default Navigation