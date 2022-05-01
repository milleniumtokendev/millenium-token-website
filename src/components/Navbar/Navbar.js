import React, { useState } from 'react'
import './Navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/millenium-logo.png';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  
    return (
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} alt='milennium token' />
          </div>
          <div className="gpt3__navbar-links_container">
            <p><a href="#home">Home</a></p>
            <p><a href="#whatIsMILT">What is MILT?</a></p>
            <p><a href="#tokenomics">Tokenomics</a></p>
            <p><a href="#roadmap">Roadmap</a></p>
            <p><a href="#audit">Audit</a></p>
          </div>
        </div>
        <div className="gpt3__navbar-sign">
            <button type="button" className='mil-btn'>BUY MILT</button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#whatIsMILT">What is MILT?</a></p>
            <p><a href="#tokenomics">Tokenomics</a></p>
            <p><a href="#roadmap">Roadmap</a></p>
            <p><a href="#audit">Audit</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <button type="button" className='mil-btn'>BUY MILT</button>
            </div>
          </div>
          )}
        </div>
      </div>
    );
  };
export default Navbar;