import React from 'react'
import { Link } from 'react-router-dom'
const SupportFeedback = () => {
  return (
    <div className='reportThank'>
        <h5>Your response has been recorded.</h5>
        <h5>Thank You for your interest in working with us!</h5>
        <h5>We will get back to you super soon.</h5>
        <Link to='/'>Return</Link>
    </div>
  )
}

export default SupportFeedback