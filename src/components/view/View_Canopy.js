import React from 'react'
import './view_Canopy.css'
import Tented_logo from '../../Images/pixlr-bg-result (1).png';
import Canopy_view1 from '../../Images/Shamwari_Bayethe_image-3.webp';
import Canopy_view2 from '../../Images/Shamwari_Bayethe_image-2.webp';
import Canopy_view3 from '../../Images/Shamwari_Bayethe_image-4.webp';
import Canopy_view4 from '../../Images/Shamwari_Bayethe_image-12.webp';
import Canopy_view5 from '../../Images/PP87128-HDR-1.webp';


function View_Canopy() {
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
            <h18> Canopy Safari Lodge</h18>
         
        <img className='Canopy_view1'  src={Canopy_view1} alt="Canopy_view1"/>
        <img className='Canopy_view2'   src={Canopy_view2} alt="Canopy_view2"/>
        <img className='Canopy_view3'   src={Canopy_view3} alt="Canopy_view3"/>
        <img className='Canopy_view4'   src={Canopy_view4} alt="Tented_view4"/>
        <img className='Canopy_view5'   src={Canopy_view5} alt="Canopy_view5"/> 
        <p className='para7'>
        Mthimkhulu’s private game reserve is one of the warmest welcomes in the African culture in this area of the country. For a luxurious, malaria-free experience, 
        look no further than Canopy Safari Lodge.   <br></br> <br></br>

        A once-in-a-lifetime safari holiday, Canopy Safari Lodge offers guests the opportunity to immerse themselves in utter tranquillity, 
        surrounded by the rich vegetation of the unique location. This canopy paradise provides privacy and a feeling of seclusion with spectacular views of the African bush.

        </p>
        <h19>FACILITIES</h19>
        <p className='para9'>When you book at Canopy Safari Lodge, you’re treated to a <br></br> host of world-class facilities such as: </p>

        <ul className='ul9'>
            <li className='li8'>
            Bush Relaxation Retreat

            </li>
            <li className='li8'>
            Gift Boutique

            </li>
            <li className='li8'>
            Lounge Area with TV
            </li>
            <li className='li8'>
            In and Outdoor Dining Facilities

            </li>
            <li className='li8'>
            Outdoor Deck

            </li>
            <li className='li8'>
            Wi-Fi
            </li>
         </ul>
         <h20>EACH TENT INCLUDES</h20>
         <ul className='ul27'>
            <li className='li19'>
            WiFi
            </li>
            <li className='li19'>
            Air conditioning

            </li>
            <li className='li19'>
            Minibar
            </li>
            <li className='li19'>
            International Dial Telephone

            </li>
            <li className='li19'>
            Fitted International Adapters

            </li>
            <li className='li19'>
            Tea & Coffee Making Facilities

            </li>
            <li className='li19'>
            Hairdryer
            </li>
            <li className='li19'>
            Electronic Safe
            </li>
            <li className='li19'>
            En-suite bathroom with bath and shower

            </li>
            <li className='li19'>
            Fire Place

            </li>
            <li className='li19'>
            Private Deck and Plunge Pool

            </li>
            <li className='li19'>
            3 Rooms have Indoor Showers

            </li>
            <li className='li19'>
            International Dial Telephone
            </li>
         </ul>
         </div>
         
    </>
  )
}

export default View_Canopy