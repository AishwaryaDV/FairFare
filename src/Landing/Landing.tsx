import React from 'react';
import Lottie from 'lottie-react';
import FairFareHomePage from "../animations/FairFareHomePage.json";
import "./Landing.scss";
interface LandingProps {}

const Landing: React.FC<LandingProps> = () => {
  return (
    <div>
      <span className="logoSection">FairFare.</span>
      <Lottie animationData={FairFareHomePage} loop={true} autoPlay={true} className='fairFareHomePageAnimation'/>
      <div className="taglineSection">FairFare – The Smarter Way to Travel: Split Expenses Seamlessly, Stay Organized, and Focus on the Fun.</div>
      <div className='buttonsSection'>
        <button className="logInBtn">Log In</button>
        <button className="registerBtn">Register</button>
      </div>
    </div>
  )
}

export default Landing