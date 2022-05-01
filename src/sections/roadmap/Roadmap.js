import React from "react";
import Phase from "../../components/phase/Phase";
import "./Roadmap.css";

const phaseRoad = {
    phase1:[
        'Community Creation',
        'Website Design and Development',
        'Infrastructure Works',
        'Fair Launch',
        'Pancakeswap Listing',
        'Advertising works',
        '500+ Investors',
    ],
    phase2:[
        'Airdrop',
        '1000+ Investors',
        'NFT Market Creation',
        'Cg-cmc Reference',
        'Partnership Agreements'
    ],
    phase3:[
        '1500+ Investors',
        'First CEX Listing'
    ],
    phase4:[
        'First DEX Exchange Listing',
        'Setting Up Your Own SWAP Exchange',
        'Determining the New Roadmap'
    ]
}

const Roadmap = () => {
    return(
       <div className="roadmap">
           <h1 className="sec-head">ROADMAP</h1>
            <div className="roadmap-wrap" id="roadmap">
               <div className="phase">
                <Phase number={1} roads={phaseRoad.phase1}/>
               </div>
               <div className="phase">
                <Phase number={2} roads={phaseRoad.phase2}/>
               </div>
               <div className="phase">
                <Phase number={3} roads={phaseRoad.phase3}/>
               </div>
               <div className="phase">
                <Phase number={4} roads={phaseRoad.phase4}/>
               </div>
               
            </div>
       </div>
    )
}
export default Roadmap;