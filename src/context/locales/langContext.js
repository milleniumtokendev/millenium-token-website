import React from "react";

export const langs = {
    TR:{
      home:"Anasayfa",
      whatMILT:"MILT Nedir?",
      tokenomic:"Tokenomic",
      roadmap:"Roadmap"
        
    },
    EN:{
       
    
    }
}

const LangContext = React.createContext(langs.en);
export default LangContext;