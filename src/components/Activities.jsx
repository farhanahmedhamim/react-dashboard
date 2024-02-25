import React from 'react'
import '../components/styles/activities.css'
import ReactApexChart from 'react-apexcharts'
import d from '../pages/images/dots.png'

import x from '../pages/images//image 1.svg'
import y from '../pages/images//image 5.svg'
import z from '../pages/images//image 6.svg'

const Activities = () => {


    const data = {
        series: [40],
        options: {
            chart: {
                type: 'radialBar',
                offsetY: -20,
                sparkline: {
                    enabled: true
                },
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                        background: "#E4E6EF",
                        strokeWidth: '100%',
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            offsetY: -20,
                            fontSize: '22px'
                        }
                    }
                }
            },
            grid: {
                padding: {
                    top: -10
                }
            },
            fill: {
                colors: ['#40189D'],
            },
            stroke: {
                lineCap: "round",
            },
        },


    }

    return (
        <div className="activities-container">
            <div className="activities-tests">
                <p>Last Month Activeties</p>
                <div className="tool-bar">
                    <img src={d} alt="" />
                </div>
            </div>
            <div className="values">
                <p>Progress</p>
            </div>
            <ReactApexChart options={data.options} series={data.series} type="radialBar" height={250} />
            <div className="education-tool">
                <div className="single-tool">
                    <img src={x} alt="" />
                    <span>Quiz</span>
                </div>
                <div className="single-tool">
                    <img src={y} alt="" />
                    <span>Test</span>
                </div>
                <div className="single-tool">
                    <img src={z} alt="" />
                    <span>Exam</span>
                </div>
            </div>
        </div>
    )
}

export default Activities