import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <div className='no-page'>
        <h1>Error 404 : Page not found !!!</h1>
        <p>Go Back to Homepage</p>
        <button><Link to={'/'}>Homepage</Link></button>
    </div>
  )
}

export default NoPage