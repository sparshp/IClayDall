import React,{useState} from 'react'
import Footer from '../components/footer/Footer'
import MailSection from '../components/MailSection'
import NavBar from '../components/navbar/NavBar'
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';

const LoginWithMobile = () => {
    const [otp, setOtp] = useState(false);
  return (
    <div>
    <NavBar />
    <form className="grid grid-cols-3 place-items-center w-full space-y-6 py-8 bg-gray-100">
        <div className="col-start-2 flex flex-col items-center space-x-2">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <p className="text-xl font-bold tracking-wider">Login with number</p>
        </div>
        <div className="col-start-2 space-y-2">
        <p for="phone">Enter your phone number:</p>
            <input pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" type="tel" className="form-control border w-96 p-2 rounded-full outline-none" placeholder="Mobile Number.."/>
              </div>
              {otp && <div className="col-start-2 space-y-2">
              <p for="phone">Enter OTP</p>
                  <input type="number" className="form-control border w-96 p-2 rounded-full outline-none" placeholder="Enter OTP"/>
              </div>}
        
        <button onClick={()=>{setOtp(true)}} className="border col-start-2 w-96 bg-black text-white font-bold rounded-full p-2" >Send OTP</button>
        <div className="col-start-2 flex items-center justify-between w-96 text-blue-500">
        <Link to="/login"><p>Login with Username or Password</p></Link>
        <Link to="/ragister"><p>I don't have an account.</p></Link> 
        </div>
        <div className="col-start-2 flex items-center justify-between text-blue-500">
            <LockIcon />
            <a href=""><p>Secourity & policy</p></a>
        </div>
    </form>
    <MailSection />
    <Footer/>
</div>
  )
}

export default LoginWithMobile