import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/MisticProject.png'
import IMG2 from '../../assets/BluInkProject.png'

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      
      <div className='container portfolio__container'>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="Mistic Barber project cover" />
          </div>
          <div>
            <h3>Item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/aquijano93/mistic-barber-studio" className='btn' target={'_blank'} rel="noopener noreferrer" >Github</a> 
              <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target={'_blank'} rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="BluInk project cover" />
          </div>
          <div>
            <h3>Item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/aquijano93/Proyecto-React/tree/main/proyecto-react" className='btn' target={'_blank'} rel="noopener noreferrer" >Github</a> 
              <a href="https://proyecto-react-puce.vercel.app/" className='btn btn-primary' target={'_blank'} rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        </article>

      </div>
    </section>
  )
}