import React from 'react';
import './cta.css';

const CTA = (props) => {
  const content = props.contents;


  return(
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p>{content.bannerHead}</p>
      <h3>{content.joinText2}</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button" className='mil-btn'>
        <a href="https://twitter.com/Tokenmillennium"  target="_blank" rel="noopener noreferrer">{content.joinUs}</a>
      </button>
    </div>
  </div>
);
}
export default CTA;
