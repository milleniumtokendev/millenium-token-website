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
            <p><a href="#whitepaper" target="_blank" rel="noopener noreferrer">Whitepaper</a></p>
            <p><a href="https://bscscan.com/token/0x38d1b5ea57bcb8a92e3e7692706623239758b871" target="_blank" rel="noopener noreferrer">BSC SCAN</a></p>
          </div>
        </div>
        <div className="gpt3__navbar-sign">
            <a href='https://pancakeswap.finance/swap' className='mil-btn' target="_blank" rel="noopener noreferrer">BUY MILT</a>
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
            <p><a href="#whitepaper" target="_blank" rel="noopener noreferrer">Whitepaper</a></p>
            <p><a href=" https://bscscan.com/token/0x38d1b5ea57bcb8a92e3e7692706623239758b871" target="_blank" rel="noopener noreferrer">BSC SCAN</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
            <a href='https://pancakeswap.finance/swap' className='mil-btn' target="_blank" rel="noopener noreferrer" >BUY MILT</a>
            </div>
          </div>
          )}
        </div>
      </div>
    );
  };
export default Navbar;