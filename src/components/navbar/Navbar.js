import React from 'react'
import './navbar.css'
 import logo from '../../Images/pixlr-bg-result (1).png';

 
function Navbar() {
    return (
        <>
        <div className='backgroundimg'>
            <nav>
        <img className='logo'   src={logo} alt="logo"/>
        
        <ul>
            <li>
                <a href='./Lodges'>Lodges</a>
            </li>
            <li>
                <a href='./Booking'>Bookings</a>
            </li>
           
            <li>
                <a href='./Admin'>Admin</a>
            </li>
        </ul>
        </nav>
        <h1>Mthimkhulu  Private Game Reserve</h1>
         </div>
         
    </>
  )
}

export default Navbar
