import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import './index.module.css'
import { container, githubIcon, linkedinIcon, siteLinks, socialLinks } from './index.module.css'

library.add(fab, faCheckSquare, faCoffee)
const IndexPage = () => {
  return (
    <div className={container}>
      <p> Ismail Mohammed</p>
      <div className={siteLinks}>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
      </div>
      <div className={socialLinks}>
        <a className={githubIcon} href="https://www.github.com/ismailmo1"><FontAwesomeIcon icon={["fab", "github"]} /></a>
        <a className={linkedinIcon} href="https://www.linkedin.com/in/ismailmo-chem/"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
      </div>
    </div >
  )
}

export default IndexPage