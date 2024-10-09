import React, { useState } from 'react';
import Lottie from 'lottie-react';
import Authentication from "../animations/Authentication.json";
import "../Login/Login.scss";
import { FaGoogle } from "react-icons/fa";
import { FaYahoo } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    const navigate = useNavigate();
    const [formData, setFormData]=useState({
        email:"",
        password:"",
    })
    const [email , setEmail] = useState<string>("");
    const [password, setPassword]= useState<string>("");

    const dummyCredentials = {
       email: "xyz@gmail.com",
        password: "xyz"
    }

    const handleInputChange =(e:any)=>{
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        //perform api call for authentication
        //dummy set up
        if (formData.email===dummyCredentials.email && formData.password===dummyCredentials.password){
            console.log("Sucessful login")
            navigate("/home");
        }

    }
  return (
    <div>
        <Lottie animationData={Authentication} autoPlay={true} loop={true} className="autheticationAnimation"/>
        <div className="logInHeader">Log In</div>
        <form className='loginForm' onSubmit={handleSubmit}>
            <input placeholder='Email ID' type="email" value={formData.email} required name="email" className='loginEmail' onChange={handleInputChange}/>
            <input placeholder='Password' type="password" value={formData.password} required name="password" className='loginPassword' onChange={handleInputChange}/>
            {/* <span>Forgot?</span> */}
            <button className='logInBtn' type="submit">Login</button>
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