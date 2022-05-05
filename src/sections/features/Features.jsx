import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';


const Features = (props) => {
  const content = props.contents;
  const featuresData = [
    {
      title: content.aim,
      text: content.aimText
    },
    {
      title: content.how,
      text:content.howText
    },
    {
      title: content.conclusion,
      text:content.conclusionText
    }
  ];

  
  return(
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text"> {content.featureHead}</h1>
      <p><a href="https://pancakeswap.finance/swap" className='mil-btn' target="_blank" rel="noopener noreferrer"> {content.buyMILT}</a></p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);
}
export default Features;
