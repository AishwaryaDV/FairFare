import React, { useState } from 'react';
import Lottie from 'lottie-react';
import Authentication from "../animations/Authentication.json";
import "../Login/Login.scss";
import { FaGoogle } from "react-icons/fa";
import { FaYahoo } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link } from 'react-router-dom';
interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    const [email , setEmail] = useState<string>("");
    const [password, setPassword]= useState<string>("");
  return (
    <div>
        <Lottie animationData={Authentication} autoPlay={true} loop={true} className="autheticationAnimation"/>
        <div className="logInHeader">Log In</div>
        <form className='loginForm'>
            <input placeholder='Email ID' type="email" value={email} required className='loginEmail'/>
            <input placeholder='Password' type="password" value={password} required className='loginPassword'/>
            {/* <span>Forgot?</span> */}
            <button className='logInBtn'>Login</button>
        </form>
        <div className="loginOtherwiseSection">Or, login with...</div>
        <div className="loginOptionsBtnsSection">
                <div className="loginOption"><FaGoogle size={30}/></div>
                <div className="loginOption"><FaYahoo size={30}/></div>
                <div className="loginOption"><MdMarkEmailUnread size={30}/></div>
        </div>
        <div className="registerSection">New to FairFare? <Link to="/signup" className="registerLink">Register</Link></div>
    </div>
  )
}

export default Login