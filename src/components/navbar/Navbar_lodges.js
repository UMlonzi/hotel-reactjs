import React from 'react'
import './navbar_lodges.css'
 import logo from '../../Images/pixlr-bg-result (1).png';
 
function Navbar_lodges() {
    return (
        <>
        <div className='backgroundimg'>
            <nav>
        <img className='logo'   src={logo} alt="logo"/>
        
        <ul>
            <li>
                <a href='./Home'>Home</a>
            </li>
            <li>
                <a href='./Bookings'>Bookings</a>
            </li>
        </ul>
        </nav>
        <h1>Luxury Safari Lodges</h1>
        <h22>Treat yourself to a safari holiday!</h22>
        <p className='Para'>Mthimkhulu  Private Game Reserve</p>
         </div>
         
    </>
  )
}

export default Navbar_lodges

