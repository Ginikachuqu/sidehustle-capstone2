import React from 'react'
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            {/* <img src={logo} alt="" /> */}
        </div>
        
        <ul className='nav-links'>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/about'> About </Link> </li>
            <li> <Link to='/contact'> Contact </Link> </li>
            <li> <Link to='/products'> Products </Link> </li>
        </ul>    
    </div>
  )
}

export default Navbar