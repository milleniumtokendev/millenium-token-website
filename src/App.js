import React from 'react'
import video1 from './assets/fire.MP4';
import video2 from './assets/ice.MP4';

//CSS
import './App.css'

//Components
import Navbar from './components/Navbar/Navbar';
import Header from './sections/Header/Header';
import Brand from './components/brand/Brand';
import WhatMILT from './sections/WhatMILT/WhatMILT';
import Features from './sections/features/Features';
import Video from './components/video/Video';
import Possibility from './sections/possibility/Possibility';
import CTA from './components/cta/CTA';
import Footer from './sections/footer/Footer'
import Tokenomic from './sections/tokenomic/Tokenomic';
import Roadmap from './sections/roadmap/Roadmap';

function App () {
  
    return (
      <div className='App'>
        <div className="gradient__bg" id='Home'>
          <Navbar/>
          <Header/>
        </div>
        
        <Possibility />
        <WhatMILT />
        <Video video={video1}/>
        <Features />
        <Tokenomic/>
        <Video video={video2}/>
        <Roadmap/>
        
        <CTA />
        <Footer />
      </div>
    )
}
export default App;