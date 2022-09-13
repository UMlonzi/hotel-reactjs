import React from 'react'
import './view_Family.css'
import Tented_logo from '../../Images/pixlr-bg-result (1).png';
import Family_view1 from '../../Images/Shamwari_Sarili_Bathroom.webp';
import Family_view2 from '../../Images/Shamwari_Sarili_Deck_View.webp';
import Family_view3 from '../../Images/Shamwari_Sarili_Bedroom.webp';
import Family_view4 from '../../Images/Shamwari_Sarili_Dining.webp';
import Family_view5 from '../../Images/Shamwari_Sarili_Sunset.webp';


function View_Family() {
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
            <h18> Family Safari Lodge</h18>
         
        <img className='Family_view1'  src={Family_view1} alt="Family_view1"/>
        <img className='Family_view2'   src={Family_view2} alt="Family_view2"/>
        <img className='Family_view3'   src={Family_view3} alt="Family_view3"/>
        <img className='Family_view4'   src={Family_view4} alt="Family_view4"/>
        <img className='Family_view5'   src={Family_view5} alt="Family_view5"/> 
        <p className='para7'>
        Family Safari Lodge is an oasis of exclusive luxury overlooking the grassy plains of Africa and the Bushman’s River, a sumptuous five-bedroomed lodge from where you and your family 
        and friends can watch Africa’s iconic Big Five. <br></br> <br></br> Perched on the banks of the Bushman’s River, Mthimkhulu Private Lodge provides the perfect exclusive bush experience, with magnificent 
        African wilderness at your doorstep. The modern interiors coupled with exclusive amenities, mean you’re never too far from superior comfort in the heart of the Eastern Cape.
        </p>
        <h21>THE OFFERING & FACILITIES</h21>
        <p className='para10'>When you book your exclusive stay at Sarili Private Lodge every aspect will be tailored to your group’s needs, 
        from meals to game drives and guided walks. Your exclusive, tailor-made stay will include:</p>

        <ul className='ul23'>
            <li className='li22'>
            Personal staff including House Manager and Private Chef and Ranger

            </li>
            <li className='li22'>
            Meals
            </li>
            <li className='li22'>
            Selected Beverages
            </li>
            <li className='li22'>
            Personalised Game Drives with your dedicated Ranger

            </li>
            <li className='li22'>
            Guided Bush Walks

            </li>
            <li className='li22'>
            Visits to Born Free and Wildlife Rehabilitation Centre
            </li>
            <li className='li22'>
            In-room spa treatments upon request

            </li>
            <li className='li22'>
            Housekeeper
            </li>
            <li className='li22'>
            Laundry           
             </li>
            <li className='li22'>
            Satellite Television with a selection of channels

            </li>
            <li className='li22'>
            Deck overlooking the Bushman’s River

            </li>
            <li className='li22'>
            Pool with Shallow Area for Children
            </li>
         </ul>

         <h24>EACH TENT INCLUDES</h24>
         <ul className='ul22'>
            <li className='li20'>
            WiFi
            </li>
            <li className='li20'>
            Air conditioning

            </li>
            <li className='li20'>
            Minibar
            </li>
            <li className='li20'>
            International Dial Telephone

            </li>
            <li className='li20'>
            Fitted International Adapters

            </li>
            <li className='li20'>
            Tea and Coffee Making Facilities

            </li>
            <li className='li20'>
            Hairdryer
            </li>
            <li className='li20'>
            Electronic Safe
            </li>
            <li className='li20'>
            En-suite bathroom with bath and shower

            </li>
            <li className='li20'>
            Private Patio or Balcony

            </li>
            <li className='li20'>
            Underfloor Heating In Bathroom

          </li>
         </ul>
         </div>
         
    </>
  )
}

export default View_Family