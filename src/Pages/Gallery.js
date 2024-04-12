import React from 'react'
import '../Pages/Gallery.css'
import Footer from './Footer'
import g1 from '../Pages/img/g1.jpeg'
import g2 from '../Pages/img/g2.jpeg'
import g3 from '../Pages/img/g3.jpeg'
const Gallery = () => {
  return (
    <>
    <div className="gal">
    <section id="gallery">
        <h2 className="gallery-heading">Gallery</h2>
        <div className="gallery-container">
            <div className="gallery-item"><img src={g1} alt="" srcset="" /></div>
            <div className="gallery-item"><img src={g2} alt="" srcset="" /></div>
            <div className="gallery-item"><img src={g3} alt="" srcset="" /></div>
          </div>
    </section>
    </div>
    <Footer/>
    </>
  )
}

export default Gallery