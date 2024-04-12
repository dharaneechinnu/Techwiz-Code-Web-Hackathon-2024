import React from 'react'
import '../Pages/About.css'
import Past from './Past'
const About = () => {
  return (
   <>
   <section id="about" className='about'>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque luctus massa a finibus. Integer quis lacinia mauris. Nulla facilisi. Proin eleifend justo sit amet dui bibendum, eget hendrerit nisi tincidunt. Duis ut placerat lorem. Morbi vestibulum interdum felis, at vestibulum justo congue sit amet. Vivamus varius vitae nisi in pharetra. Nullam luctus quam sit amet magna dignissim, vel euismod purus vehicula. Curabitur volutpat bibendum lacus at scelerisque. Nullam fermentum justo quis ipsum aliquam, eget tristique nisi vehicula. Donec nec fringilla risus.</p>
        <p>Phasellus nec magna consectetur, fermentum metus nec, molestie metus. Nulla facilisi. Cras in malesuada dui, eget dapibus justo. Sed euismod ante et massa ultricies vehicula. Suspendisse non ante et nisi fermentum fermentum a eget arcu. Cras in tincidunt elit. Cras non libero suscipit, eleifend mi vel, aliquet purus. Sed hendrerit augue at neque luctus, et sollicitudin risus blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Ut congue, odio eu facilisis efficitur, metus urna vehicula sem, a congue velit libero eget nunc. Fusce vitae congue velit. Proin vel purus vitae ante viverra viverra sit amet sit amet justo.</p>
    </section>
    <Past/>
   </>
  )
}

export default About