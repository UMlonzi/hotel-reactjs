
import React from 'react'
import Tented_logo from '../../Images/pixlr-bg-result (1).png';
import { useNavigate } from "react-router-dom";
import RoomsTable from '../roomsTable/RoomsTable'


const Bookings_Dashboard = (props) => {
const navigate = useNavigate();

    return (
        <>
       <div>
        <img className='Tented_logo'   src={Tented_logo} alt="Tented_logo"/>
        <button className='AdminLogout'  onClick={() => navigate("/Home")} > Sign out</button>
        <button className='AdminBack' onClick={() => navigate("/Dashboard")}> Back</button>

        <div className='line'></div>
       <h50>Bookings</h50>
       <RoomsTable/>

        </div>
    </>
  )
}
export default Bookings_Dashboard
