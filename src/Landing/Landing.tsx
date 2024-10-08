import React from 'react';
import Lottie from 'lottie-react';
import FairFareHomePage from "../animations/FairFareHomePage.json";
import "./Landing.scss";
import { useState

 } from 'react';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import { Link } from 'react-router-dom';
interface LandingProps {}

const Landing: React.FC<LandingProps> = () => {

  return (
    <div>
      <span className="logoSection">FairFare.</span>
      <Lottie animationData={FairFareHomePage} loop={true} autoPlay={true} className='fairFareHomePageAnimation'/>
      <div className="taglineSection">FairFare – The Smarter Way to Travel: Split Expenses Seamlessly, Stay Organized, and Focus on the Fun.</div>
      <div className='buttonsSection'>
        <Link to="/login" className="logInBtn">Log In</Link>
        <Link to="/signup" className="registerBtn">Register</Link>
      </div>
    </div>
  )
}

export default Landing