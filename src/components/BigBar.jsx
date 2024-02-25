import React from 'react'
import '../components/styles/bigBar.css'
// import ReactApexChart from 'react-apexcharts'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

// const data = {

//     series: [{
//         name: 'TEAM A',
//         type: 'column',
//         data: [123, 211, 122, 227, 113, 222, 137, 221, 144, 222, 130, 218, 150, 340, 147, 238, 384, 172, 338, 244, 173, 392, 110, 266, 119, 340, 319, 372, 122, 222, 389]
//     }, {
//         name: 'TEAM B',
//         type: 'line',
//         data: [275, 250, 225, 200, 175, 150, 125, 100, 75, 50, 25, 20, 50, 100, 150, 200, 250, 300, 300, 275, 250, 225, 200, 175, 150, 125, 100, 75, 50, 25, 0]
//     }],
//     options: {
//         chart: {
//             height: 350,
//             type: 'line',
//             stacked: false,

//             toolbar: {
//                 show: false
//             }
//         },
//         legend: {
//             show: false
//         },
//         dataLabels: {
//             enabled: false
//         },
//         grid: {
//             strokeDashArray: 5,
//         },
//         colors: ["#3C50E0", "#F58634"],
//         stroke: {
//             width: [0, 8],
//             curve: 'smooth',
//             dashArray: [0, 15]
//         },
//         plotOptions: {
//             bar: {
//                 columnWidth: '30%',
//                 borderRadius: 5,
//                 borderRadiusApplication: "end",
//             },
//         },

//         fill: {
//             opacity: [0.85, 1],
//             gradient: {
//                 inverseColors: false,
//                 shade: 'light',
//                 type: "vertical",
//                 opacityFrom: 0.85,
//                 opacityTo: 0.55,
//                 stops: [0, 100, 100, 100],
//             }
//         },
//         markers: {
//             size: 0,
//         },
//         xaxis: {
//             categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
//             tickPlacement: 'on',
//         },
//         yaxis: {
//             min: 0,
//             max: 400,
//             tickAmount: 4,
//         },
//         tooltip: {
//             shared: true,
//             intersect: false,
//             y: {
//                 formatter: function (y) {
//                     if (typeof y !== "undefined") {
//                         return y.toFixed(0) + " points";
//                     }
//                     return y;

//                 }
//             }
//         }
//     },


// };

const options = {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: '',
        align: 'left',
    },
    xAxis: [{
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        crosshair: true
    }],
    yAxis: [{
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: '',
            style: {
                color: Highcharts.getOptions().colors[1]
            },
        },
        min: 0,
        max: 400,
        startOnTick: false,
        endOnTick: false,
        tickInterval: 100,
    }, {
        title: {
            text: 'Precipitation',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true,
        visible: false,
    }],
    tooltip: {
        shared: true
    },
    legend: {
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 80,
        floating: true,
        enabled: false,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor ||
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Precipitation',
        type: 'column',
        borderRadius: 20,
        pointWidth: 10,
        color: "#3C50E0",
        yAxis: 1,
        data: [27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0, 60.0, 28.6, 32.1, 27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0, 60.0, 28.6, 32.1, 60.0, 28.6, 32.1, 27.6, 28.8, 21.7],
        tooltip: {
            valueSuffix: ' mm'
        }

    }, {
        name: 'Temperature',
        type: 'spline',
        data: [250, 300, 320, 300, 250, 200, 150, 140, 160, 200, 250, 300, 320, 300, 250, 200, 150, 140, 150, 200, 250, 300, 320, 300, 250, 200, 180, 190, 220, 270],
        tooltip: {
            valueSuffix: '°C'
        }
    }],
    plotOptions: {
        spline: {
            dashStyle: 'ShortDash',
            lineWidth: 7,
            color: '#F58634'
        },
    },
}


const BigBar = () => {




    return (
        <div className='bigbar'>
            {/* <ReactApexChart options={data.options} series={data.series} type="bar" height={350} /> */}
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>

    )
}

export default BigBar