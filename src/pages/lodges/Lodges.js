import React from 'react'
import Navbar_lodges from '../../components/navbar/Navbar_lodges';
import Footer_Lodges from '../../components/footer/Footer_Lodges';
import Table_booking from '../../components/table_booking/Table_booking';
import Lodge_s from '../../components/Lodges/Lodge_s';
import './lodges.css'


function Lodges() {
    return (
    <div className='nav'>
 <Navbar_lodges/>
 <Table_booking/>
 <Lodge_s/>
 <Footer_Lodges/>

    </div>
  )
}

export default Lodges
