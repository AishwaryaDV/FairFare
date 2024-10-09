import React from 'react';
import "../Home/Home.scss";
import { Link } from 'react-router-dom';
import FooterNavbar from '../Footer/FooterNavbar';
interface HomeProps {}

const Home:React.FC<HomeProps> = () => {
  return (
    <div>
        <Link to="/home" className="logoSection">FairFare.</Link>
        Home
        <FooterNavbar/>
    </div>
  )
}

export default Home