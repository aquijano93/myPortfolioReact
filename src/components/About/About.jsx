import './About.css'
import React from 'react'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ years working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>1+ years working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>1+ years working</small>
            </article>
          </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Excepturi at, eligendi animi ullam dolorum voluptates repellat 
              officiis molestiae ab tenetur.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's talk</a>
            
        </div>
      </div>
    </section>
  )
}
