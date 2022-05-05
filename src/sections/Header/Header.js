import React from 'react';
import ai from '../../assets/ai.png';
import './Header.css';

const Header = () => (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">The Beautiful Face of the Millennium &apos;</h1>
        <p>
        MILT is a social action approach based on various factors such as value creation, NFT market, marketing channels and partnership.
        </p>
      </div>
  
      <div className="gpt3__header-image">
        <img src={ai} alt='milennium token' />
      </div>
    </div>
  );
  
  export default Header;