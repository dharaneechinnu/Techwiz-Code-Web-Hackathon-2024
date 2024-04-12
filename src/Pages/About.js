import React from 'react'
import '../Pages/About.css'
import Past from './Past'
const About = () => {
  return (
   <>
   <section id="about" className='about'>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque luctus massa a finibus. Integer quis lacinia mauris. Nulla facilisi. Proin eleifend justo sit amet dui bibendum, eget hendrerit nisi tincidunt. Duis ut placerat lorem. Morbi vestibulum interdum felis, at vestibulum justo congue sit amet. Vivamus varius vitae nisi in pharetra. Nullam luctus quam sit amet magna dignissim, vel euismod purus vehicula. Curabitur volutpat bibendum lacus at scelerisque. Nullam fermentum justo quis ipsum aliquam, eget tristique nisi vehicula. Donec nec fringilla risus.</p>
         </section >
    <div className="ab" id='pas'></div>
    <Past/>
   </>
  )
}

export default About