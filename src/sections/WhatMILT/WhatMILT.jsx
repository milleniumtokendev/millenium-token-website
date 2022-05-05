import React from 'react';
import {RiTelegramFill,RiTwitterFill}from 'react-icons/ri';
import Feature from '../../components/feature/Feature';
import './WhatMILT.css';

const WhatMILT = () => (
  <div className="gpt3__whatgpt3 section__margin" id="whatIsMILT">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is MILT" what={1}
       text="
       MILT is a cryptocurrency based on several factors such as value creation, NFT market, marketing channels and partnership.
        " 
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text" >
        The Beautiful Face of the Millennium !
      </h1>
      <p>
        <a href="#Home">
        Join the MILT Project. Catch the future yourself!
        </a>
        
      </p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Join Global Telegram" text={(
        <a href="https://t.me/MillenniumtokenEN" className='social-icon'>
          <RiTelegramFill />
        </a>
      )}/>
       <Feature title="Join TR Telegram" text={(
        <a href="https://t.me/MillenniumtokenTR" className='social-icon'>
          <RiTelegramFill />
        </a>
      )}/>
       <Feature title="Join Twitter" text={(
        <a href="https://twitter.com/Tokenmillennium" className='social-icon'>
          <RiTwitterFill />
        </a>
      )}/>
    </div>
  </div>
);

export default WhatMILT;
