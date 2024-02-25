import React from 'react'
import ReactApexChart from 'react-apexcharts'
import '../components/styles/progress.css'



const options = {

    series: [70],
    options: {
        chart: {
            height: 200,
            type: 'radialBar',
            foreColor: '#000'
        },

        colors: ['#706AD0', '#000'],
        track: {
            dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                blur: 4,
                opacity: 0.15
            }
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '50%',
                },
                track: {
                    background: '#D0F3FF'
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        show: false
                    }
                }
            },
        },
        stroke: {
            lineCap: "round",
        },
    },
}
const options2 = {

    series: [70],
    options: {
        chart: {
            height: 200,
            type: 'radialBar',
            foreColor: '#000',

        },

        colors: ['#706AD0', '#000'],
        track: {
            dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                blur: 4,
                opacity: 1
            },
            background: '#ff5200',
            strokeWidth: '100%',
            margin: 0
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '50%',
                },
                track: {
                    background: '#D0F3FF'
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        show: false
                    }
                }
            },
        },
        stroke: {
            lineCap: "round",
        },
    },
}
const Progress = () => {

    return (
        <div className="redial-wrap">
            <div className="single-rogress">
                <div className="rogress-wrap">
                    <div className="parsentance">+200K</div>
                    <ReactApexChart options={options.options} series={options.series} type="radialBar" height={200} />
                </div>
                <div className="proggress-info">
                    <p>Subscriptions</p>
                    <span>800,000</span>
                </div>
            </div>
            <div className="single-rogress">
                <div className="rogress-wrap">
                    <div className="parsentance">+20K</div>
                    <ReactApexChart options={options2.options} series={options2.series} type="radialBar" height={200} />
                </div>
                <div className="proggress-info">
                    <p>Traffics</p>
                    <span>96,000</span>
                </div>
            </div>
        </div>
    )
}

export default Progress