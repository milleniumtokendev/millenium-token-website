import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = (props) =>{ 
  const content = props.contents;

  return(
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">{content.possibilityHead}</h1>
      <p>{content.possibilityText}</p>
      <h4>
        <a href="https://pancakeswap.finance/swap" target="_blank" rel="noopener noreferrer">
          <button type="button" className='mil-btn' >{content.buyMILT}</button> 
        </a> 
      </h4>
    </div>
  </div>
);
}
export default Possibility;
