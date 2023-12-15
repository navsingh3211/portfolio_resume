import React from 'react'
import './about.css'
import myImage from '../../assets/my-image2.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>B-tech <br /><i>Heritage Institute of technology,Kolkata</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>CGPA</h5>
                  <small>7.02</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>AnandPushp technologies Private Limited</li>
                      <li>Mern stack developer</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
            Mern Stack Developer with 2.4+yrs of experiences.<br/>Good understanding and experience in Node js,Express js ,JavaScript
(V5 and V6) And React Js. Knowledge in Mongodb,Mysql databases quaries and Php in Codeigniter framwork .
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About