import React from 'react'
import './about.css'
import Zebra from '../../Images/Shamwari-Game-Reserve-is-back-in-the-game.webp';
function About() {
    return (
        <>
        <div className='backgroundcolour'>
            <div>
      <h30>About </h30>
      <p>A stay at Mthimkhulu Private Game Reserve is one that will remain with you forever.
         <br></br>Due to its location in the heart of the Eastern Cape, the reserve offers abundant wildlife, fauna 
         and flora exclusive to the area and unforgettable encounters with nature.</p>
      </div>
         </div>
         <div className='backgroundcolour'>
         <img className='Zebra'   src={Zebra} alt="Zebra"/>
         </div>
         
    </>
  )
}

export default About