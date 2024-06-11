import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
    // const [sticky, setSticky] = useState(false);
    const [mobile, setMobile] = useState(false);

    const toggleMenu = () => {
        mobile? setMobile(false) : setMobile(true);
    }

  return (
    <div>
        <nav>
            <h1 className="logo">Monólito Arquitetura</h1>

            <ul className={mobile? '' : "hide_menu"}>
                <li><Link to='Hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            </ul>
            <img src={menu_icon} alt="hamburger menu icon - mobile" className="menu" onClick={toggleMenu} />
        </nav>
    </div>
  )
}

export default Navbar