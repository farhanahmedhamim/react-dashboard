import React from 'react'
import '../components/styles/average.css'
import a from '../pages/images/right-up.png'
import ReactApexChart from 'react-apexcharts'






const Average = ({ dataArr, avg, persent, impression, rounded }) => {


    const data = {
        series: [{
            data: dataArr
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
                events: {
                    click: function (chart, w, e) {
                    }
                },
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: '40%',
                    distributed: false,
                    borderRadius: rounded,
                    colors: {
                        ranges: [{
                            from: 0,
                            to: 0,
                            color: undefined
                        }],
                        backgroundBarColors: [],
                        backgroundBarOpacity: 1,
                        backgroundBarRadius: 0,
                    },
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                labels: {
                    show: false,
                },

                axisTicks: {
                    show: false,
                    borderType: 'solid',
                    color: '#78909C',
                    height: 6,
                    offsetX: 0,
                    offsetY: 0
                },


            },
            yaxis: {
                show: false
            },
            grid: {
                show: false
            },
            colors: [
                function ({ value, seriesIndex, dataPointIndex, w }) {
                    if (dataPointIndex === 3 || dataPointIndex === 1 || dataPointIndex === 0) {
                        return "#40189D";
                    } else {
                        return "rgba(64, 24, 157, 0.42)";
                    }
                }
            ],
        },
    }



    return (
        <div className='single-avg'>
            <div className="boxes-wrap">
                <div className="bx"></div>
                <div className="bx"></div>
                <div className="bx"></div>
            </div>
            <p>{impression}</p>
            <div className="chrt-wrap">
                <div className="small-chart">
                    <ReactApexChart options={data.options} series={data.series} type="bar" height={180} width={"100%"} />
                </div>
                <div className="chart-text">
                    <h1>{avg}</h1>
                    <div className="uper">
                        <div className="uper-image">
                            <img src={a} alt="" />
                        </div>
                        <span>{persent}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Average