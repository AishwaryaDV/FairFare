import React, { useState } from 'react';
import Lottie from 'lottie-react';
import Authentication from "../animations/Authentication.json";
import "../Signup/Signup.scss";
import { FaGoogle } from "react-icons/fa";
import { FaYahoo } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link } from 'react-router-dom';
interface SignupProps {}

const Signup: React.FC<SignupProps> = () => {
    const [email , setEmail] = useState<string>("");
    const [password, setPassword]= useState<string>("");
    const [name, setName]= useState<string>("");
  return (
    <div>
        <Lottie animationData={Authentication} autoPlay={true} loop={true} className="autheticationAnimation"/>
        <div className="signupHeader">Sign Up</div>
        <div className="signupOptionsBtnsSection">
                <div className="signupOption"><FaGoogle size={30}/></div>
                <div className="signupOption"><FaYahoo size={30}/></div>
                <div className="signupOption"><MdMarkEmailUnread size={30}/></div>
        </div>
        <form className='signupForm'>
            <input placeholder='Email ID' type="email" value={email} required className='signupEmail'/>
            <input placeholder='Password' type="password" value={password} required className='signupPassword'/>
            <input placeholder='Username' type="text" value={name} required className='signupName'/>
            {/* <span>Forgot?</span> */}
            <button className='signupBtn'>Register</button>
        </form>
        <div className="loginSection">Already have an account? <Link to="/login" className="loginLink">Login</Link></div>
    </div>
  )
}

export default Signup