import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>The possibilities beyond your dreams are here. We will take a big step towards the future. Are you ready for this?</p>
      <h4>
        <a href="#home">
          <button type="button" className='mil-btn'>BUY MILT</button> 
        </a> 
      </h4>
    </div>
  </div>
);

export default Possibility;
