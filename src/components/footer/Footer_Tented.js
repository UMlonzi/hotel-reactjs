import React from 'react'
import './footer_Tented.css' 
import footerlogo from '../../Images/pixlr-bg-result (1).png';




function Footer_Tented() {
    return (
        <>
        <div className='footercolour1'>
        <img className='footerlogo1'   src={footerlogo} alt="footerlogo"/>
            <p className='p8'>Mthimkhulu  Private Game Reserve is home to vast herds of wildlife, birdlife and incredible ecological diversity. <br></br><br></br>
                The game reserve comprises of seven individual 3-star lodges, an Explorer Camp and two different education and rehabilitation facilities. 
                We are passionate about conserving a vanishing way of life and aim to translate this through the ethos of our conservation principles.</p>
            <h36>TALK TO US</h36>
            <p className="p15">021 569 8657  <br></br> mthimkhulu@gmail.com
            </p>
            <h37>
                SITE MAP
            </h37>
            <ul className='ul31'>
            <li className='li31'>
                <a className='a32' href='./Home'>Home</a>
            </li>
            <li className='li31'>
                <a className='a32' href='/Bookings'>Bookings</a>
            </li>
           
            <li className='li31'>
                <a className='a32' href='/Admin'>Admin</a>
            </li>
        </ul>
        <h45>FOLLOW US ON SOCIAL</h45>
        </div>
    
           
       
         
    </>
  )
}

export default Footer_Tented