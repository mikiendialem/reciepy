import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
function NavBar() {
  return (
    <>
    <div className='nav'>
      <h2>Recipy</h2>
      <ul  className='navbar'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/reciepe'>Recipy</Link></li>
      </ul>
    </div>
    <hr/>
    </>
  )
}

export default NavBar
