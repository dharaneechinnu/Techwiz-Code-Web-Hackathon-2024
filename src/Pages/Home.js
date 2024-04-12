import React, { useEffect, useState } from 'react'
import logo from '../Pages/img/club.png'
import '../Pages/Home.css'
import About from './About'
import Nav from './Nav'
const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000 );

  
    return () => clearTimeout(loadingTimer);
  }, []); 

  return (

    
  <>
  
  <div className="container" id='home1'>
  <div>
     {
     isLoading ?(
      <div className="loading">
        <img src={logo} alt="" srcset="" />
      </div>
     ):(<>
        <Nav/>
      <div className="bg-img " id='home'>

        <img src={logo} alt="" srcset="" className='logo'  />
        <h1>Welcome to TechWiz Club!</h1>
        <p>Join us for exciting events and activities!</p>
     
    </div>
    <div className="ab" id='ab'></div>
    </>
     )
    
    }
    </div>
  </div>
  <About/>
  </>
  )
}

export default Home