import React from 'react'
import AboutUs from './AboutUs'
import Adopt from './Adopt'
const Home = () => {
  return (
    <>
    <div className='homePage'>
    <div className='content'>
        <h1><span style={{color:'orangered'}}>Adopt</span> Me</h1>
        <p>Give life to an animal in need. </p>
        </div>
    </div>
    <AboutUs/>
    <Adopt/>
    </>
  )
}

export default Home