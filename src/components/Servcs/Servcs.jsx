import React from 'react'
import './Servcs.css'
import {BiCheck} from 'react-icons/bi'
export const Servcs = () => {
  return (
    <section id='services'>
      <h5>What i offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UX/UI Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create structure information of the product and business.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Visual design and wireframing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User-friendly usability.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Interactive design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Beta test (client feedback).</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React JS library for high performance.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Bootstrap, Material UI tools.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom interfaces.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive designs.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Backend</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>GeneXus V18.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>GeneXus V15 + WWplus</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Firebase / Firestore database (NoSql).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>SQL - MySql data structure.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Learning backend tools...</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}
