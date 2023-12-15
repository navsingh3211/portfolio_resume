import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>Navneet Singh</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/navneet-singh-a9b5bb1a4/"><BsLinkedin/></a>
          <a href="https://github.com/navsingh3211?tab=repositories"><BsGithub/></a>
          <a href="https://leetcode.com/navsingh32111/"><BsMedium/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Navneet Singh. All rightts reserved.</small>
        </div>
    </footer>
  )
}

export default Footer