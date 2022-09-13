import React from 'react'
import Sign_In from '../../components/sign_In/Sign_In';
import  Navbar_Admin from '../../components/sign_In/Navbar_Admin';



function Admin() {
    return (
      <div className='nav'>
                <Navbar_Admin/>

          <Sign_In/>

    
    </div>
  )
}

export default Admin
