import React from "react";
import Phase from "../../components/phase/Phase";
import "./Roadmap.css";



const Roadmap = (props) => {
    const content = props.contents;
    const phaseRoad = {
        phase1:[
            content.phase1.a,
            content.phase1.b,
            content.phase1.c,
            content.phase1.d,
            content.phase1.e,
            content.phase1.f,
            content.phase1.g
        ],
        phase2:[
            content.phase2.a,
            content.phase2.b,
            content.phase2.c,
            content.phase2.d,
            content.phase2.e
           
        ],
        phase3:[
            content.phase3.a,
            content.phase3.b
        ],
        phase4:[
            content.phase4.a,
            content.phase4.b,
            content.phase4.c
        ]
    }

    return(
       <div className="roadmap">
           <h1 className="sec-head">{content.roadmap}</h1>
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