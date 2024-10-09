import React from 'react';
import "../Footer/FooterNavbar.scss";
interface FooterNavbar {}

const FooterNavbar = () => {
  return (
    <div className='footerNavbarSection'>
        <div className="navbarContainer">
        <div className="navbarOption">Rates</div>
        <div className="navbarOption">Groups</div>
        <div className="navbarOption addTrip">Add Trip</div>
        <div className="navbarOption">Activity</div>
        <div className="navbarOption">Account</div>
        </div>
    </div>
  )
}

export default FooterNavbar