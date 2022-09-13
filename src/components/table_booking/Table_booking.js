import React from 'react'
import './table_booking.css'
import { useNavigate } from "react-router-dom";
// import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faCalendarDays, faPerson } from '@fortawesome/fontawesome-free-solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
// import Bookingtable from './Bookingtable'
import { useState } from 'react';
import { getDatabase, ref, set } from "firebase/database";
import {
	Box, Button, Snackbar, Table,
	TableBody, TableCell, TableHead, TableRow
} from "@material-ui/core";


const Table_booking = (props) => {
  const navigate = useNavigate();
  const [valid, setvalid] = useState(true)
      const [hide, sethide] = useState(true)
      const handleSubmit = (e) => {
          e.preventDefault();
          const book_date = document.getElementById('book-date');
          const book_time = document.getElementById('book-time');
          
          const leave_date = document.getElementById('leave-date');
          const leave_time = document.getElementById('leave-time');
  
          if(!book_date.value || !book_time.value || !leave_date.value || !leave_time.value){
              alert('Please fill all the fields');
          }else{
              writeUserData();
          function writeUserData() {
              const db = getDatabase();
              set(ref(db, 'data/'), {
              bookingdate: book_date.value,
              bookingtime: book_time.value,
              leave_date: leave_date.value,
              leave_time: leave_time.value,
              });
          }
              alert('Your booking has been made');
              const BookPageDiv = document.querySelector('.box');
              const container = document.querySelector('.container');
              setvalid(!valid + BookPageDiv.classList.add("show"));
              sethide(!hide + container.classList.add("hide"));
          }
      }

      const [plan, setPlan] = useState("business");

  const handleChange = (e) => {
    e.preventDefault();
    setPlan(e.target.value);
  };

  const handleChange2 = (e) => {
    e.preventDefault();
    };

  const data = [
    {
      Types_of_Lodges: ["Lorem", "Ipsum", "Dolor sit amet"],
    }
  ];

  const renderData = (plan1, plan2) => {
    const arr = data[0][plan1];
    const arr2 = data[0][plan2];

    return arr.map((item, index) => (
      <tr key={`plan_${index + 1}`}>
        <td>{item}</td>
        <td>{arr2[index]}</td>
      </tr>
    ));
  };

 
    return (
        <>
        <div className='backgroundcolour2'>
            <div className='tablecolour'>
          <div className='headerSearch'>
          <div className="container">
       <div className="content">
         <div className="form2">
          <div className="txt">Date & Time you would like to Stay</div>
          <form className='form1' action="" onSubmit={handleSubmit}>
             <div className="inputData">
               <input type="date" name="" id="book-date"/>
            </div>
           <div className="inputData">
              <input type="time" name="" id="book-time" />
            </div>
            </form>
            <form>
            <div className="txt2">Date & Time you would like to leave</div>
            <div className="inputData">
               <input type="date" name="" id="leave-date" />
            </div>
             <div className="inputData">
              <input type="time" name="" id="leave-time" />
            </div>
           <table className='dropdown'>
        <thead>
          <tr>
            <th>
              <select datachosen={plan} onChange={(e) => handleChange(e)}>
              <option value={"Types_of_Lodges"}>Types of Lodges</option>
                <option value={"Tented Safari Lodge"}>Tented Safari Lodge</option>
                <option value={"Canopy Safari Lodge"}>Canopy Safari Lodge</option>
                <option value={"Family Safari Lodge"}>Family Safari Lodge</option>
              </select>
            </th>
           
          </tr>
        </thead>
      </table>
             <div className="book">
               <button type="submit" onClick={() => navigate("/LoginBooking")}   >Book Your Stay</button>
           </div>
          </form>
          </div>
          </div>
</div>
            {/* <button onClick={() => navigate("/Sign_in")}   className='buttonYourStay'>BOOK YOUR STAY</button> 
            <input type="text" placeholder="First Name & Last Name" className="headerNameInput" />
           
            <span className='HeaderSearchText'>date to date</span>
            <input type="text" placeholder="First Name & Last Name" className="headerNameInput" />
          
            <span className='HeaderSearchText'>2 adults 2 children 1 room</span> */}
            {/* < Bookingtable /> */}
            </div>
            
            <h3>Enjoy wild Africa in luxury <br></br>at Mthimkhulu Safari Lodges</h3>
            <p className='para2'>Mthimkhulu game reserve comprises of seven separate 5-star safari lodges and an explorer camp. 
            Each luxury lodge has its own bespoke style that provides you with a unique experience during your stay. The various lodges are spaced out across our game reserve, to ensure that you 
            and your fellow adventurers have a private and memorable experience of South Africa.
             Mthimkhulu offers an array of experiences you can enjoy such as Game Drives, Fly-fishing, Walking Safaris, Wildlife Rehabilitation Centre, Photographic Safaris and more. <br></br>
             So, let’s take a look at our incredible accommodation options in Mthimkhulu!</p>
            </div>
         </div>
         
    </>
  )
}

export default Table_booking
