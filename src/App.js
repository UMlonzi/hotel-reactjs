import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/home/Home";
import Lodges from "./pages/lodges/Lodges";
import View_of_Tented from "./pages/view_Tented/View_of_Tented"
import View_of_Canopy from "./pages/view_Canopy/view_of_Canopy"
import View_of_Family from "./pages/view_Family/View_of_Family"
import Sign_in from "./pages/signin/Sign_in"
import Bookings from "./pages/booking/Booking"
import Admin from './pages/admin/Admin';
import Dashboard from './pages/dashboard/Dashboard';
import RoomsDashboard from './pages/roomsDashboard/RoomsDashboard';
import UsersDashboard from './pages/usersDashboard/UsersDashboard';
import BookingsDashboard from './pages/bookingsDashboard/BookingsDashboard'
import LoginBooking from './pages/login/LoginBooking'
import Payment from  './pages/payment/Payment'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        </Routes>
        <Routes>
        <Route path="/Lodges" element={<Lodges/>}/>
        </Routes>
        <Routes>
        <Route path="/Home" element={<Home/>}/>
        </Routes>
        <Routes>
        <Route path="View_of_Tented" element={<View_of_Tented/>}/>
        </Routes>
        <Routes>
        <Route path="View_of_Canopy" element={<View_of_Canopy/>}/>
        </Routes>
        <Routes>
        <Route path="View_of_Family" element={<View_of_Family/>}/>
        </Routes>
        <Routes>
        <Route path="Sign_in" element={<Sign_in/>}/>
        </Routes>
        <Routes>
        <Route path="Bookings" element={<Bookings/>}/>
        </Routes>
        <Routes>
        <Route path="Admin" element={<Admin/>}/>
        </Routes>
        <Routes>
        <Route path="Dashboard" element={<Dashboard/>}/>
        </Routes>
        <Routes>
        <Route path="RoomsDashboard" element={<RoomsDashboard/>}/>
        </Routes>
        <Routes>
        <Route path="UsersDashboard" element={<UsersDashboard/>}/>
        </Routes>
        <Routes>
        <Route path="BookingsDashboard" element={<BookingsDashboard/>}/>
        </Routes>
        <Routes>
        <Route path="LoginBooking" element={<LoginBooking/>}/>
        </Routes>
        <Routes>
        <Route path="Payment" element={<Payment/>}/>
        </Routes>
    </BrowserRouter>
    
    </div>
  )
}

 




export default App;
