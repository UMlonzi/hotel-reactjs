import React from 'react'
import './bookings.css'
import Tented_logo from '../../Images/pixlr-bg-result (1).png';



function Bookings() {
    return (
        <>
       <div>
        <nav className='nav2'>
        <img className='Tented_logo'   src={Tented_logo} alt="Tented_logo"/>
   
        <ul className='ul6'>
            <li className='li5'>
                <a className='a4' href='./Home'>Home</a>
            </li>
            <li className='li5'>
                <a className='a4' href='./Lodges'>Lodges</a>
            </li>
            <li className='li5'>
                <a className='a4' href=''>Bookings</a>
            </li>
           
        </ul>
        </nav>
        </div>
        <div className='backgroundBookings'>

        </div>
    </>
  )
}

export default Bookings