import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Aim',
    text: `
    We want to add a different value to the trade with a spiritual approach to the crypto world where money is at the forefront.

Our target audience is orphans, orphans...🏃‍♂️

Our means of reaching our target audience and operating are our investors. So we're going to do this together. 💪

We want to be a light in the eyes of children in need, a smile on their face, and a hope for the future in their hands. 💞
    `,
  },
  {
    title: 'How?',
    text: `
    We will create an nft trade environment with the nft market we will create. Revenues from Nft will accumulate in our aid budget. 💸

      In addition, we want to make our name known to wider masses through partnerships with social platforms established in real life and through advertising channels. 🤝

      In addition to these, one of our first goals is to be listed on cex and dex exchanges.🤑
    `,
  },
  {
    title: 'Conclusion',
    text: `
    If we can be a ball of love as big as a dot in the hearts of children, how happy for us, what a happy occasion. 💞
    We wish everyone success on this road.🏃‍♀️🔥🏃‍♂️💸
    `,
  }
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p><a href="http://" className='mil-btn'>BUY MILT</a></p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
