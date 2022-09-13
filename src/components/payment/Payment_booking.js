import React from 'react'
import './payment.css'
function Payment_booking() {
    return (
    
      <div className="welcome2">
        
      <div className="login-register-container2">
          <>
          <h52>
              Payment
          </h52>
            <h54>
              Card Name
            </h54>
            <input className='cardname'
            
              type=""
              placeholder=""
          
            />
             <h54>
             Expiry Date
          </h54>
            <input
            className='cardname'
              type=""
              placeholder=""
              
              
            />
            <h53>CVV</h53>
            <input           
              className='cardname'              type=""
              placeholder=""
             
            />
            <h53>
            Name
            </h53>
            <input        
                className='cardname'

              type=""
              placeholder=""
            
            />
            <button className='payButton'
           onClick={()=>{ alert('Successfully Paid'); }}
            > Pay</button>
          </>
    
          
    
      </div>
    </div>
  );
}


export default Payment_booking