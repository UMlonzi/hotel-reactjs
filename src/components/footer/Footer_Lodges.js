import React from 'react'
import './footer_Lodges.css' 
import footerlogo from '../../Images/pixlr-bg-result (1).png';




function Footer_Lodges() {
    return (
        <>
        <div className='footercolour1'>
        <img className='footerlogo1'   src={footerlogo} alt="footerlogo"/>
            <p className='p6'>Mthimkhulu  Private Game Reserve is home to vast herds of wildlife, birdlife and incredible ecological diversity. <br></br><br></br>
                The game reserve comprises of seven individual 3-star lodges, an Explorer Camp and two different education and rehabilitation facilities. 
                We are passionate about conserving a vanishing way of life and aim to translate this through the ethos of our conservation principles.</p>
            <h16>TALK TO US</h16>
            <p className="p5">021 569 8657  <br></br> mthimkhulu@gmail.com
            </p>
            <h17>
                SITE MAP
            </h17>
            <ul className='ul5'>
            <li className='li5'>
                <a className='a2' href='./Home'>Home</a>
            </li>
            <li className='li5'>
                <a className='a2' href='/Bookings'>Bookings</a>
            </li>
           
            <li className='li5'>
                <a className='a2' href='/Admin'>Admin</a>
            </li>
        </ul>
        <h15>FOLLOW US ON SOCIAL</h15>
        </div>
    
           
       
         
    </>
  )
}

export default Footer_Lodges