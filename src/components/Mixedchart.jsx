import React from 'react'
import '../components/styles/mixedchart.css'
import ReactApexChart from 'react-apexcharts';

const Mixedchart = () => {

    const data = {
        series: [{
            name: 'lowest',
            type: 'column',
            data: [53, 31, 62, 27, 83, 52, 47, 21]
        }, {
            name: 'Median',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41]
        }, {
            name: 'Highest',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                stacked: false,
                toolbar: false,
            },
            stroke: {
                width: [0, 0, 5],
                curve: 'smooth',
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%',
                }
            },
            colors: ["#40189D", "#616463", "#F9B526"],
            fill: {
                opacity: [0.85, 0.25, 1],
                gradient: {
                    inverseColors: false,
                    shade: 'light',
                    type: "vertical",
                    opacityFrom: 0.85,
                    opacityTo: 0.55,
                    stops: [0, 100, 100, 100]
                }
            },
            labels: ['january', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
            markers: {
                size: 0
            },
            yaxis: {
                min: 0,
                max: 100,
                tickAmount: 3,
            },
            legend: {
                show: false
            },
            tooltip: {
                shared: true,
                intersect: false,
                y: {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + " points";
                        }
                        return y;

                    }
                }
            }
        },
    }

    return (
        <div className="mixed-chart">
            <ReactApexChart options={data.options} series={data.series} type="line" height={350} width={"100%"} />
        </div >
    )
}

export default Mixedchart