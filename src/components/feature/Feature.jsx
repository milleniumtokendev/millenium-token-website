import React from 'react';
import './feature.css';

const Feature = ({ title, text,what }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      {
        what === 1 ? <h1 className='what-title'>{title}</h1> : <h1>{title}</h1>
      }
      <div />
      
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
