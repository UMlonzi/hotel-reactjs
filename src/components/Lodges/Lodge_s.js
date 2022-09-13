import React from 'react'
import './Lodge_s.css'
import Tented from '../../Images/ddd.jpg';
import Canopy from '../../Images/bayethe-tented-lodge.jpg';
import Family from '../../Images/kwandwe-ecca-lodge-suite-exterior-eve.jpg';
import { useNavigate } from "react-router-dom";

const Lodge_s = (props) => {
   const navigate = useNavigate();
    return (
        <>
        <div className='Backgroundcolour3'>
         <h12>Tented Safari Lodge </h12>
         <p className='para3'>For an unprecedented luxury tented safari, <br></br>Mthimkhulu’s new tented camp is the perfect <br></br>escape into the wilderness.</p>
         <ul className='ul32'>
            <li className='li9'>
            9 x Premier Tented Suites

            </li>
            <li className='li9'>
            Children 16 years + Welcome

            </li>
            <li className='li9'>
            Private heated plunge pool
            </li>
         </ul>
         <h14>Canopy Safari Lodge</h14>
         <p className='para4'>For an unprecedented luxury tented safari, <br></br>Mthimkhulu’s new tented camp is the perfect <br></br>escape into the wilderness.</p>
         <ul className='ul3'>
            <li className='li3'>
            9 x Premier Tented Suites

            </li>
            <li className='li3'>
            Children 16 years + Welcome

            </li>
            <li className='li3'>
            Private heated plunge pool
            </li>
         </ul>
         <img className='Tented_lodge'   src={Tented} alt="Tented"/> <button onClick={() => navigate("/View_of_Tented")} className='Tented_button'>MORE INFO</button>
         <h13> Family Safari Lodge </h13>
         <p className='para5'>For an unprecedented luxury tented safari, <br></br>Mthimkhulu’s new tented camp is the perfect <br></br>escape into the wilderness.</p>
         <ul className='ul4'>
            <li className='li4'>
            9 x Premier Tented Suites

            </li>
            <li className='li4'>
            Children 16 years + Welcome

            </li>
            <li className='li4'>
            Private heated plunge pool
            </li>
         </ul>  
         <img className='Canopy_lodge'   src={Canopy} alt="Canopy"/>    
         <button onClick={() => navigate("/View_of_Canopy")} className='Canopy_button'>MORE INFO</button> 


             <img className='Family_lodge'   src={Family} alt="Family"/>
              <button onClick={() => navigate("/View_of_Family")} className='Family_button'>MORE INFO</button> 
         </div>
         
    </>
  )
}

export default Lodge_s
