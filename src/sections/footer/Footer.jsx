import React from 'react';
import Logo from '../../assets/millenium-logo.png';
import './footer.css';




const Footer = () =>{
  


  return (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <button className='mil-btn'>
        <a href='https://pancakeswap.finance/swap' target="_blank" rel="noopener noreferrer">
          Buy Now !
        </a>
      </button>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={Logo} alt="gpt3_logo" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>
          <a href="#home" className='footer-link'>Home</a>
        </p>
        <p>
          <a href="#whatIsMILT" className='footer-link'>What is MILT ?</a>
        </p>
        <p>
          <a href="#tokenomics" className='footer-link'>Tokenomics</a>
        </p>
        <p>
          <a href="#roadmap" className='footer-link'>Roadmap</a>
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Millenium Token</h4>
        <p>
          <a href="https://pancakeswap.finance/swap" className='footer-link' target="_blank" rel="noopener noreferrer">Buy</a>
        </p>
        <p>
          <a href="https://pancakeswap.finance/swap"className='footer-link' target="_blank" rel="noopener noreferrer">Pancakeswap</a>
        </p>
        <p>
          <a href="https://bscscan.com/token/0x38d1b5ea57bcb8a92e3e7692706623239758b871" className='footer-link' target="_blank" rel="noopener noreferrer">BSC Scan</a>
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Contact</h4>
        <p>
          <a href="mailto:info@millenniumtoken.com" className='footer-link'>info@millenniumtoken.com </a>
        </p>
        <p>
          <a href="https://t.me/MillenniumtokenEN" className='footer-link' target="_blank" rel="noopener noreferrer">Global Telegram</a>
        </p>
        <p>
        <a href="https://t.me/MillenniumtokenTR" className='footer-link' target="_blank" rel="noopener noreferrer">TR Telegram</a>
        </p>
        <p>
          <a href="https://twitter.com/Tokenmillennium" className='footer-link' target="_blank" rel="noopener noreferrer">Twitter</a>
        </p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Millenium Token. All rights reserved.</p>
    </div>
  </div>
)};

export default Footer;
