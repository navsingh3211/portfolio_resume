import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.jpg'
// import IMG2 from '../../assets/img2.png'
// import IMG3 from '../../assets/img3.jpg'
// import IMG4 from '../../assets/img4.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>portfolio</h3>
            <small className='text-light'>HTML | CSS | REACT</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/himani413/FashionGallery" target="_blank" rel='noreferrer' className='btn'>Link</a>
            </div>
              
        </article>

      </div>
    </section>
  )
}

export default Myprojects