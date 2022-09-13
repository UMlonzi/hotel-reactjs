import React from 'react'
import Tented_logo from '../../Images/pixlr-bg-result (1).png';
import './navbar_dashboard.css'
import { useNavigate } from "react-router-dom";


const Navbar_dashboard = (props) => {
    const navigate = useNavigate();

    return (
        <>
       <div>
        <img className='Tented_logo'   src={Tented_logo} alt="Tented_logo"/>
        <button className='AdminLogout' onClick={() => navigate("/Admin")}> Sign out</button>
        <div className='line'></div>
        <button className='Users' onClick={() => navigate("/UsersDashboard")} >Users</button>
        <button className='Rooms' onClick={() => navigate("/Rooms_Dashboard")}  >Rooms</button>
        <button className='Bookings' onClick={() => navigate("/BookingsDashboard")} >Bookings</button>

        </div>
    </>
  )
}

export default Navbar_dashboard