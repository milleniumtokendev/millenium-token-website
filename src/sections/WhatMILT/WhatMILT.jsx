import React from 'react';
import {RiTelegramFill,RiTwitterFill}from 'react-icons/ri';
import Feature from '../../components/feature/Feature';
import './WhatMILT.css';

const WhatMILT = (props) =>{ 
  const content = props.contents;
  
  
  return(
  <div className="gpt3__whatgpt3 section__margin" id="whatIsMILT">
    <div className="gpt3__whatgpt3-feature">
      <Feature title={content.whatMILT} what={1}
       text={content.bannerText}
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text" >
      {content.bannerHead}
      </h1>
      <p>
        <a href="https://t.me/MillenniumtokenEN" target="_blank" rel="noopener noreferrer">
        {content.joinText1}
        </a>
        
      </p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Global Telegram" text={(
        <a href="https://t.me/MillenniumtokenEN" className='social-icon' target="_blank" rel="noopener noreferrer">
          <RiTelegramFill />
        </a>
      )}/>
       <Feature title="TR Telegram" text={(
        <a href="https://t.me/MillenniumtokenTR" className='social-icon' target="_blank" rel="noopener noreferrer">
          <RiTelegramFill />
        </a>
      )}/>
       <Feature title="Twitter" text={(
        <a href="https://twitter.com/Tokenmillennium" className='social-icon' target="_blank" rel="noopener noreferrer">
          <RiTwitterFill />
        </a>
      )}/>
    </div>
  </div>
);
}
export default WhatMILT;
