import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            coffeeroaster
        </div>
        
        <ul className='nav-links'>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/about'> About </Link> </li>
            <li> <Link to='/contact'> Contact </Link> </li>
        </ul>    
    </div>
  )
}

export default Navbar