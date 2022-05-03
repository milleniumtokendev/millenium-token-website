import React from "react";
import Chart from "../../components/chart/Chart";
import Feature from "../../components/feature/Feature";
import './Tokenomic.css'

//grafik üzerindeki veriler
const graph = [
    {label:'Lock',value:30},
    {label:'Marketing',value:10},
    {label:'Circulation',value:70}            
]

const Tokenomic = () => {
    return(
        
       <div className="tokenomic-main">
           <h1 className="sec-head">TOKENOMIC</h1>
            <div className="tokenomic" id="tokenomics">
                <div className="content">
                    <ul>
                        <li>
                            <Feature title="Total Supply" text="1.000.000.000" />
                        </li>
                        <h2 className="trans-head"> <div></div> Buy</h2>
                        <li>
                            <Feature title="Rewards" text="8%" />
                        </li>
                        <li>
                            <Feature title="Liquidity" text="2%" />
                        </li>
                        <li>
                            <Feature title="Marketing" text="4%" />
                        </li>
                        <h2 className="trans-head"> <div></div> Sell</h2>
                        <li>
                            <Feature title="Rewards" text="8%" />
                        </li>
                        <li>
                            <Feature title="Marketing" text="4%" />
                        </li>
                        <li>
                            <Feature title="Liquidity" text="4%" />
                        </li>
                    </ul>
                </div>
                <div className="chart-area">
                    <Chart graph={graph}/>
                </div>
        </div>
       </div>
    )
}

export default Tokenomic;