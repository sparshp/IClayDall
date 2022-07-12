import React from 'react'
import Footer from '../components/footer/Footer'
import MailSection from '../components/MailSection'
import NavBar from '../components/navbar/NavBar'
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';

const Ragistartion = () => {
  return (
    <div>
          <NavBar />
          <form className="grid grid-cols-3 place-items-center w-full space-y-6 py-8 bg-gray-100">
              <div className="col-start-2 flex flex-col items-center space-x-2">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <p className="text-xl font-bold tracking-wider">Ragistration</p>
              </div>
              <div className="col-start-2 space-y-2">
                  <p>Username</p>
                  <input type="username" className="form-control border w-96 p-2 rounded-full outline-none" placeholder="Username.."/>
              </div>
              <div className="col-start-2 space-y-2">
                  <p>Email</p>
                  <input type="email" className="form-control border w-96 p-2 rounded-full outline-none" placeholder="email.."/>
              </div>
              <div className=" col-start-2 space-y-2">
                  <p>Password</p>
                  <input type="password" className="form-control border w-96 p-2 rounded-full outline-none" placeholder="Password..."/>
              </div>
              <input type="submit" className="border col-start-2 w-96 bg-black text-white font-bold rounded-full p-2" />
              <div className="col-start-2 flex items-center justify-between w-96 text-blue-500">
                 <Link to="/loginwithmobile"><p>Ragister with mobile ?</p></Link>
                 <Link to="/login"><p>Already have an account.</p></Link>
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

export default Ragistartion