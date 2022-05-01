import React from "react";
import Chart from "../../components/chart/Chart";
import Feature from "../../components/feature/Feature";
import './Tokenomic.css'

//grafik üzerindeki veriler
const graph = [
    {label:'Marketing',value:20},
    {label:'Team',value:12},
    {label:'PancakeSwap Liquidity',value:68}               
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
                        <li>
                            <Feature title="Marketing" text="200,000,000 (20%)" />
                        </li>
                        <li>
                            <Feature title="Team" text="120,000,000 (12%)" />
                        </li>
                        <li>
                            <Feature title="PancakeSwap" text="680,000,000 (68%)" />
                        </li>
                        <h2 className="trans-head"> <div></div> Transaction Fees</h2>
                        <li>
                            <Feature title="Busd Reward" text="5%" />
                        </li>
                        <li>
                            <Feature title="Marketing Fee" text="1%" />
                        </li>
                        <li>
                            <Feature title="Add to Liquidity" text="4%" />
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