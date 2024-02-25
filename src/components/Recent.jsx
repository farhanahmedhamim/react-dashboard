import React from 'react'
import '../components/styles/recent.css'
import ReactApexChart from 'react-apexcharts'

const Recent = () => {

    

    const data = {
        series: [
            {
                name: 'Q1 Budget',
                group: 'budget',
                data: [80, 70, 60, 50, 40, 70]
            },
            {
                name: 'Q1 Actual',
                group: 'actual',
                data: [60, 50, 40, 30, 20, 50]
            }
        ],
        options: {
            chart: {
                type: 'bar',
                height: 300,
                stacked: true,
                toolbar: {
                    show: false
                }
            },
            stroke: {
                width: [2, 2],
                colors: ['#fff']
            },
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    columnWidth: ['50%'],
                    borderRadius: 5,
                    borderRadiusWhenStacked: 'all'
                },
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: [
                    'january',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June'
                ],
            },
            fill: {
                opacity: 1
            },
            colors: ['#FFA800', '#E5EAEE'],
            yaxis: {
                min: 0,
                max: 100,
                tickAmount: 5,
            },
        },
    }

    return (
        <div className="recent-chart">
            <div className="recent-text">
                <div className="recent-left">
                    <h1>Recent Stats</h1>
                    <p>More than 400+ new members</p>
                </div>
                <div className="recent-center">
                    <span className="spanis">Actual</span>
                    <span className="spanils">Prediction</span>
                </div>
                <nav>
                    <ul className="lists">
                        <li className="add">Month</li>
                        <li>Week</li>
                        <li>Day</li>
                    </ul>
                </nav>
            </div>
            <ReactApexChart options={data.options} series={data.series} type="bar" height={300} />
        </div>
    )
}

export default Recent