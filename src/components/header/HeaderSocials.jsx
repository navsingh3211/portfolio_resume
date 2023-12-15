import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/navneet-singh-a9b5bb1a4/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/navsingh3211?tab=repositories" target="_blank" rel='noreferrer'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials