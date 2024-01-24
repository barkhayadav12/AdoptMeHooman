import React from 'react'
import { Link } from 'react-router-dom'

const ThankyouReport = () => {
  return (
    <div className='reportThank'>
        <h2>Thank You for reporting! We will send help asap!</h2>
        <Link to='/'>Return</Link>
    </div>
  )
}

export default ThankyouReport