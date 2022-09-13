import React from 'react'
import './view_Tented.css'
import Tented_logo from '../../Images/pixlr-bg-result (1).png';
import Tented_view1 from '../../Images/sindile-gallery-01.webp';
import Tented_view2 from '../../Images/sindile-gallery-03-1024x683.webp';
import Tented_view3 from '../../Images/sindile-gallery-06.webp';
import Tented_view4 from '../../Images/sindile-gallery-16.webp';
import Tented_view5 from '../../Images/eee.jfif';


function View_Tented() {
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
           
            <li className='li5'>
                <a className='a4' href=''>Admin</a>
            </li>
        </ul>
        </nav>
        </div>
        <div className='backgroundcolour4'>
            <h18> Tented Safari Lodge</h18>
         
        <img className='Tented_view1'   src={Tented_view1} alt="Tented_view1"/>
        <img className='Tented_view2'   src={Tented_view2} alt="Tented_view2"/>
        <img className='Tented_view3'   src={Tented_view3} alt="Tented_view3"/>
        <img className='Tented_view4'   src={Tented_view4} alt="Tented_view4"/>
        <img className='Tented_view5'   src={Tented_view5} alt="Tented_view5"/> 
        <p className='para7'>
        Mthimkhulu’s new luxury tented camp is a secluded, luxury getaway set deep in the African veld. The camp mimics a solitary leopard’s sanctuary,  blending with the surrounding bush while providing excellent vantages over the Bushman’s River and surrounding plains. <br></br> <br></br>
        The nine luxury free-standing tents are elevated above the surrounding bush, allowing uninhibited views, unsullied by any other man-made structures or light pollution.
         The harmonious, intimate design minimises the environmental footprint. <br></br> <br></br> The dining area and bar are situated to make the most of the views over the reserve, with focal points including a large harvest table and fire pit.
        </p>
        <h19>FACILITIES</h19>
        <p className='para8'>When you book at Tented Safari Lodge, you’re treated to a <br></br> host of world-class facilities such as: </p>

        <ul className='ul7'>
            <li className='li6'>
            Reception and Lounge

            </li>
            <li className='li6'>
            Gift Boutique

            </li>
            <li className='li6'>
            Dining room with fireplace
            </li>
            <li className='li6'>
            Bar and Lounge with fireplace and big screen television

            </li>
            <li className='li6'>
            Deck with firepit

            </li>
            <li className='li6'>
            Boma
            </li>
            <li className='li6'>
            Relaxation Retreat

            </li>
            <li className='li6'>
            WiFi connection
            </li>
         </ul>


         <h20>EACH TENT INCLUDES</h20>
         <ul className='ul8'>
            <li className='li7'>
            WiFi
            </li>
            <li className='li7'>
            Air conditioning

            </li>
            <li className='li7'>
            Nespresso Coffee Machine
            </li>
            <li className='li7'>
            International Dial Telephone

            </li>
            <li className='li7'>
            Fitted International Adapters

            </li>
            <li className='li7'>
            Private Minibar
            </li>
            <li className='li7'>
            Hairdryer
            </li>
            <li className='li7'>
            Electronic Safe
            </li>
            <li className='li7'>
            En-suite bathroom with bath and shower

            </li>
            <li className='li7'>
            Outdoor shower
            </li>
            <li className='li7'>
            Private deck with heated plunge pool and lounging area under a pergola

            </li>
            <li className='li7'>
            Indoor fireplace
            </li>
            <li className='li7'>
            Lounge area
            </li>
         </ul>
         </div>
         
    </>
  )
}

export default View_Tented