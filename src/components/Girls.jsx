import React from 'react'
import '../components/styles/girls.css'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


const options = {
    title: {
        text: ''
    },
    plotOptions: {
        series: {
            borderRadius: '50%'
        }
    },
    series: [
        {
            type: 'pie',
            data: [{
                name: '',
                y: 200,
                color: "#1939CD",
                dataLabels: {
                    enabled: true,
                    distance: -50,
                }
            }, {
                y: 586,
                color: "#40189D"
            }],
            center: [120, 110],
            size: 240,
            innerSize: '80%',
            dataLabels: {
                enabled: false
            }
        }
    ]
}


const Girls = () => {

    return (
        <div className="girls-container">
            <div className="girls-text">
                <h1>60%</h1>
                <h2>Girls</h2>
            </div>
            <HighchartsReact 
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default Girls