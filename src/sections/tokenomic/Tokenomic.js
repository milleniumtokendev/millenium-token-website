import React from "react";
import Chart from "../../components/chart/Chart";
import Feature from "../../components/feature/Feature";
import './Tokenomic.css'

//grafik üzerindeki veriler


const Tokenomic = (props) => {
    const content = props.contents;
    const graph = [
        {label:content.lock,value:30},
        {label:content.marketing,value:10},
        {label:content.circulation,value:70}            
    ]

    return(
       <div className="tokenomic-main">
           <h1 className="sec-head"> {content.tokenomic}</h1>
            <div className="tokenomic" id="tokenomics">
                <div className="content">
                    <ul>
                        <li>
                            <Feature title= {content.totalSupply} text="1.000.000.000" />
                        </li>
                        <h2 className="trans-head"> <div></div>  {content.buy}</h2>
                        <li>
                            <Feature title= {content.rewards} text="4%" />
                        </li>
                        <li>
                            <Feature title= {content.liquidity} text="2%" />
                        </li>
                        <li>
                            <Feature title= {content.marketing} text="4%" />
                        </li>
                        <h2 className="trans-head"> <div></div> Sell</h2>
                        <li>
                            <Feature title= {content.rewards} text="4%" />
                        </li>
                        <li>
                            <Feature title={content.marketing} text="4%" />
                        </li>
                        <li>
                            <Feature title={content.liquidity} text="3%" />
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