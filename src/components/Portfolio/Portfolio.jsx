import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/MisticProject.png'
import IMG2 from '../../assets/BluInkProject.png'
import IMG3 from '../../assets/FormProject.png'
import IMG4 from '../../assets/expenses.png'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Portfolio = () => {

  const MySwal = withReactContent(Swal)

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
            <h3>Mistic Barber project</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/aquijano93/mistic-barber-studio" className='btn' target={'_blank'} rel="noopener noreferrer" >Github</a> 
              <a onClick={()=>  MySwal.fire({
              title: <p>Sorry</p>,
              icon: 'error',
              text: "This page it's not deployed yet."
              })} className='btn btn-primary' target={'_blank'} rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="BluInk project cover" />
          </div>
          <div>
            <h3>BluInk project </h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/aquijano93/Proyecto-React/tree/main/proyecto-react" className='btn' target={'_blank'} rel="noopener noreferrer" >Github</a> 
              <a href="https://proyecto-react-puce.vercel.app/" className='btn btn-primary' target={'_blank'} rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="BluInk project cover" />
          </div>
          <div>
            <h3>Interactive form</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/aquijano93/Formulario-interactivo" className='btn' target={'_blank'} rel="noopener noreferrer" >Github</a> 
              <a href="https://formulario-interactivo.vercel.app/" className='btn btn-primary' target={'_blank'} rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="Budget App cover" />
          </div>
          <div>
            <h3>Budget App</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/aquijano93/budgetApp" className='btn' target={'_blank'} rel="noopener noreferrer" >Github</a> 
            <a href="https://budget-app-seven-beta.vercel.app/" className='btn btn-primary' target={'_blank'} rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        </article>



      </div>
    </section>
  )
}

