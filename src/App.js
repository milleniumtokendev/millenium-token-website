import React, { useState } from 'react';

//Contexts
import LangContext,{langs} from './context/locales/langContext';

//CSS
import './App.css'

//Components
// import Navbar from './components/Navbar/Navbar';
// import Header from './sections/Header/Header';
// import WhatMILT from './sections/WhatMILT/WhatMILT';
// import Features from './sections/features/Features';
// import Video from './components/video/Video';
// import Possibility from './sections/possibility/Possibility';
// import CTA from './components/cta/CTA';
// import Footer from './sections/footer/Footer'
// import Tokenomic from './sections/tokenomic/Tokenomic';
// import Roadmap from './sections/roadmap/Roadmap';

// //Video
// import video1 from './assets/fire.MP4';
// import video2 from './assets/ice.MP4';
// import Changelang from './components/lang/Changelang';

function App () {
  const [lang,setLang] = useState(langs.EN);
  const [selectedLang,setSelectedLang] = useState("EN");
  const changeLanguage = () => {
    setSelectedLang(lang === "EN" ? "TR" : "EN");
    lang === langs.EN ? setLang(langs.TR) : setLang(langs.EN);
  }
  
  // const content = props.contents;
  // {content.}
    return (
      <LangContext.Provider value={{lang}}>
        <h1 style={{color:'red',textAlign:'center',marginTop:'20%'}}>
          This website is temporarily unavailable.
        </h1>
        {/* <div className='App'>
          <div className="gradient__bg" id='Home'>
            <Changelang lang={selectedLang} contents={lang} changeLanguage={changeLanguage.bind(this)}/>
            <Navbar contents={lang}/>
            <Header contents={lang}/>
          </div> 
          <Possibility contents={lang}/>
          <WhatMILT contents={lang}/>
          <Video video={video1} contents={lang}/>
          <Features contents={lang}/>
          <Tokenomic contents={lang}/>
          <Video video={video2} contents={lang}/>
          <Roadmap contents={lang}/>
          <CTA contents={lang}/>
          <Footer contents={lang}/>
        </div> */}
      </LangContext.Provider>
    )
}
export default App;