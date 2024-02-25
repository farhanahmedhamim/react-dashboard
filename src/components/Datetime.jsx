import React from 'react'
import '../components/styles/datetime.css'
import ReactApexChart from 'react-apexcharts'

const Datetime = () => {

    const data = {

        series: [{
            data: [{
                x: 1,
                y: [6625, 6638.03, 6598.95, 6604.01]
            },
            {
                x: 2,
                y: [6625, 6638.03, 6598.95, 6604.01]
            },
            {
                x: 3,
                y: [6625, 6638.03, 6598.95, 6604.01]
            },
            {
                x: 4,
                y: [6625, 6638.03, 6598.95, 6604.01]
            },
            {
                x: 5,
                y: [6625, 6638.03, 6598.95, 6604.01]
            },
            {
                x: 6,
                y: [6625, 6638.03, 6598.95, 6604.01]
            },
            {
                x: 7,
                y: [6625, 6638.03, 6598.95, 6604.01]
            },
            {
                x: 8,
                y: [6625, 6638.03, 6598.95, 6604.01]
            },
            {
                x: 9,
                y: [6625, 6638.03, 6598.95, 6604.01]
            },
            {
                x: 10,
                y: [6625, 6638.03, 6598.95, 6604.01]
            },
            {
                x: 11,
                y: [6625, 6638.03, 6598.95, 6604.01]
            },
            {
                x: 12,
                y: [6625, 6638.03, 6598.95, 6604.01]
            },
            {
                x: 13,
                y: [6625, 6638.03, 6598.95, 6604.01]
            },
            {
                x: 14,
                y: [6625, 6638.03, 6598.95, 6604.01]
            },
            {
                x: 15,
                y: [6625, 6638.03, 6598.95, 6604.01]
            },
            {
                x: 16,
                y: [6625, 6638.03, 6598.95, 6604.01]
            },
            {
                x: 17,
                y: [6625, 6638.03, 6598.95, 6604.01]
            },
            {
                x: 18,
                y: [6625, 6638.03, 6598.95, 6604.01]
            },
            {
                x: 19,
                y: [6625, 6638.03, 6598.95, 6604.01]
            },
            {
                x: 20,
                y: [6625, 6638.03, 6598.95, 6604.01]
            }
            ]
        }],
        options: {
            chart: {
                type: 'candlestick',
                height: 350,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                candlestick: {
                    colors: {
                        upward: 'rgba(60, 111, 234, 1)',
                        downward: 'rgba(60, 111, 234, 1)'
                    },
                }
            },
            xaxis: {

            },
            yaxis: {
                tooltip: {
                    enabled: true
                },
                show: false
            }
        },


    }


    return (
        <div className="datetimecart">
            <div className="datatime-text">
                <h3>Future 30 Days Data Will Be</h3>
                <div className="selec-tor">
                    <select>
                        <option value="This Month">This Month</option>
                        <option value="This Month">This Year</option>
                        <option value="This Month">This Month</option>
                        <option value="This Month">This Year</option>
                    </select>
                </div>
            </div>
            <ReactApexChart options={data.options} series={data.series} type="candlestick" height={300} width={"100%"} />
        </div>
    )
}

export default Datetime