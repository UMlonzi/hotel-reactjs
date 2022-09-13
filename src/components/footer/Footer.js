import React from 'react'
import './footer.css' 
import footerlogo from '../../Images/pixlr-bg-result (1).png';




function Footer() {
    return (
        <>
        <div className='footercolour'>
        <img className='footerlogo'   src={footerlogo} alt="footerlogo"/>
            <p className='p2'>Mthimkhulu  Private Game Reserve is home to vast herds of wildlife, birdlife and incredible ecological diversity. <br></br><br></br>
                The game reserve comprises of seven individual 3-star lodges, an Explorer Camp and two different education and rehabilitation facilities. 
                We are passionate about conserving a vanishing way of life and aim to translate this through the ethos of our conservation principles.</p>
            <h10>TALK TO US</h10>
            <p className="p3">021 569 8657  <br></br> mthimkhulu@gmail.com
            </p>
            <h9>
                SITE MAP
            </h9>
            <ul className='ul1'>
            <li className='li1'>
                <a className='a1' href='/Lodges'>Lodges</a>
            </li>
            <li className='li1'>
                <a className='a1' href='/Bookings'>Bookings</a>
            </li>
           
            <li className='li1'>
                <a className='a1' href='/Admin'>Admin</a>
            </li>
        </ul>
        <h11>FOLLOW US ON SOCIAL</h11>
        </div>
    
           
       
         
    </>
  )
}

export default Footer