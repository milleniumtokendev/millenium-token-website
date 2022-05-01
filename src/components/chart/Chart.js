import React from "react";
import './Chart.css';
import DonutChart from 'react-donut-chart';

const Chart = ({graph}) => {
    return(
        <div className="chart-main">
            <DonutChart
                data={graph}
                colors={[
                    '#81AFDD',//marketing
                    '#9c27b0',//team
                    '#084d92' //pancake swap
                ]}
                className='donutchart'
                onMouseEnter={(item) => console.log(`mousing entering: ${item.label}`)}
                onMouseLeave={(item) => console.log(`mouse leaving: ${item.label}`)}
                onClick={(item, toggled) =>
                  toggled
                    ? console.log(`selecting: ${item.label}`)
                    : console.log(`unselecting: ${item.label}`)
                }
            />
        </div>
    )
}
export default Chart;