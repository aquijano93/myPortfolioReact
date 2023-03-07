import React from 'react'
import './Footer.css'
import {BsSpotify} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Andres</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Porfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://open.spotify.com/playlist/78xFDaDn7TvJvri7mlU6T3" target={'_blank'} rel="noopener noreferrer"><BsSpotify/></a>
        <a href="https://www.instagram.com/andresfabian93/" target={'_blank'} rel="noopener noreferrer"><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/andres-quijano-espinosa/" target={'_blank'} rel="noopener noreferrer"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Andres Quijano Developer. All rights reserved.</small>
      </div>
    </footer>
  )
}
