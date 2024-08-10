import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <h1>Flat Spot</h1>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/booking'}>Booking</Link>
      <Link to={'/payment'}>Payment</Link>
      <Link to={'/review'}>Review</Link>
      <Link to={'/flat'}>Flat</Link>
      <Link to={'/login'}>Login</Link>
    </div>
  )
}

export default Navbar
