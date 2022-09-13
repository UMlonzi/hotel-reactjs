import React from 'react'
import './activities.css'
import Game_Drives from '../../Images/bukela-game-lodge-game-drive-elephant-590x390.jpg';
import Spa from '../../Images/massage-1-1.webp';
import Fly_fishing from '../../Images/wi-fly-fishing-spots-1.jpg';
import Map from '../../Images/Untitled.png';



function Activities() {
    return (
        <>
        <div className='Backgroundcolour' >
        <h5>Things to Experience at Mthimkhulu </h5>
        <h6 className='Activitie1'> Safari Game Drives </h6>  <h6 className='Activitie2'> Mthimkhulu Spa</h6>  <h6 className='Activitie3'> Fly-fishing</h6>
            <img className='Game_Drives'   src={Game_Drives} alt="Game_Drives"/>   
             <img className='Spa'   src={Spa} alt="Spa"/>  
             <img className='Fly_fishing'   src={Fly_fishing} alt="Fly_fishing"/> 
             <img className='Map'   src={Map} alt="Map"/> 
             <h7 >Directions</h7>
            <h8>DRIVING DIRECTIONS TO MTHIMKHULU PRIVATE GAME RESERVE, EASTERN CAPE:</h8>
            <p1 className='p1'>
            Follow the N2 out of Gqeberha heading towards Grahamstown, bypassing the R342 turn-off. <br></br>
            Continue along the N2 until you reach a sign board that says Mthimkhulu Private Game Reserve . <br></br>
            Turn left onto the gravel road and follow the road until you reach a T-junction.
            At the T-junction follow the sign boards to Mthimkhulu Private Game Reserve.<br></br>  <br></br>
            Should you get lost and need a pointer in the right direction, contact us on +27 (0) 42 203 1111. <br></br>

            </p1>
         </div>
         
    </>
  )
}

export default Activities