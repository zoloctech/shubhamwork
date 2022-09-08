import React from 'react'
import { Link } from 'react-router-dom'
import RegistrationForm from '../Register/RegistrationForm'
 
function Header() {
  return (
    <div>
      <Link to="/register">Registration</Link>
     
    </div>
  )
}

export default Header