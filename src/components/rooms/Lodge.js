import React from 'react'
import './lodge.css'
 import Tented from '../../Images/ddd.jpg';
 import Canopy from '../../Images/bayethe-tented-lodge.jpg';
 import Family from '../../Images/kwandwe-ecca-lodge-suite-exterior-eve.jpg';
 import { useNavigate } from "react-router-dom";

 const Lodges = (props) => {
  const navigate = useNavigate();
    return (
        <>
        <div className='Backgroundcolour' >
            <h31>LODGES</h31>
            <h4 className='lodge1'> Tented Safari Lodge</h4>  <h4 className='lodge2'> Canopy Safari Lodge</h4>  <h4 className='lodge3'> Family Safari Lodge</h4>
            <img className='Tented'   src={Tented} alt="Tented"/> <button onClick={() => navigate("/View_of_Tented")}  className='buttonTented'>FEATURES</button>   
             <img className='Canopy'   src={Canopy} alt="Canopy"/>    <button onClick={() => navigate("/View_of_Canopy")} className='buttonCanopy'>FEATURES</button> 
             <img className='Family'   src={Family} alt="Family"/> <button onClick={() => navigate("/View_of_Family")}  className='buttonFamily'>FEATURES</button> 
         </div>
         
    </>
  )
}

export default Lodges