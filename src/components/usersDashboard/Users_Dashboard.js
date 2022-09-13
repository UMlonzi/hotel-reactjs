import React from 'react'
import Tented_logo from '../../Images/pixlr-bg-result (1).png';
import { useNavigate } from "react-router-dom";
import './usersDashboard.css'
import RoomsTable from '../roomsTable/RoomsTable'


const Users_Dashboard = (props) => {
const navigate = useNavigate();

    return (
        <>
       <div>
        <img className='Tented_logo'   src={Tented_logo} alt="Tented_logo"/>
        <button className='AdminLogout'  onClick={() => navigate("/Home")} > Sign out</button>
        <button className='AdminBack' onClick={() => navigate("/Dashboard")}> Back</button>

        <div className='line'></div>
       <h50>Users</h50>

        </div>
    </>
  )
}
export default Users_Dashboard