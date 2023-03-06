import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/andres-quijano-espinosa/" target='_blank' rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/aquijano93" target='_blank' rel="noopener noreferrer"><FaGithub/></a>
    </div> 
    )
}

export default HeaderSocials
