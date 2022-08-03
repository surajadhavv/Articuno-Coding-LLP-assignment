import React from 'react';
import './Navbar.css';
import {GrCart} from 'react-icons/gr';
import {GrSearch} from 'react-icons/gr'
import {MdPersonOutline} from 'react-icons/md'
import logo from '../Assets/e-shop-logo.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
        </div>
        <div className="nav-tabs">
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>
        </div>
        <div className="nav-icons">
            <GrSearch/>
            <GrCart/>
            <MdPersonOutline/>
        </div>
    </nav>
  )
}

export default Navbar