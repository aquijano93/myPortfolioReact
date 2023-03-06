import './Header.css'
import React from 'react'
import ME from '../../assets/me.png'
import { CTA } from './CTA'
import HeaderSocials from './HeaderSocials'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Andres Quijano</h1>
        <h5 className='text-light'>GeneXus dev | Front End React dev</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
