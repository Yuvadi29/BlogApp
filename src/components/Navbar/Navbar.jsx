import React from 'react';
import './Navbar.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { GrTwitter } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { BsSearch } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="navleft">
        <FaFacebook className='fbicon' />
        <GrTwitter className='twittericon' />
        <FaInstagram className='instaicon' />
      </div>

      <div className="navcenter">
        <ul className="Navcomp">
          <li className="NavcompItem">Home</li>
          <li className="NavcompItem">About</li>
          <li className="NavcompItem">Contact</li>
          <li className="NavcompItem">Write</li>
          <li className="NavcompItem">Logout</li>
        </ul>
      </div>

      <div className="navright">
        <CgProfile
          className='profileimage'
          alt="profileImage" />
          
        <BsSearch className='searchicon' />
      </div>

    </div>
  )
}

export default Navbar;