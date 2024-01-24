import React from 'react'
import { Link } from 'react-router-dom'
const AboutUs = () => {
  return (
    <div class='aboutUs'>
    <h1>About Us</h1>
        Welcome to FurryMate,where compassion meets companionship. We are
        a dedicated team of animal enthusiasts committed to making a difference in the lives of furry friends.
        Our mission is simple yet powerful: to connect deserving animals with loving homes.With a passion
        for animal welfare, we strive to create a platform that not only
        facilitates adoptions but also fosters a community of caring individuals. join us in our journey
        to give every animal a chance for a happy,loving home.
        <br/>
        <Link to='/support'>Become a volunteer</Link>
    </div>
  )
}

export default AboutUs