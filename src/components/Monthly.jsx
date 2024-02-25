import React from 'react'
import '../components/styles/monthly.css'
import ReactApexChart from 'react-apexcharts'

const Monthly = () => {


    const data = {

        series: [{
            name: "Test",
            data: [40, 50, 60, 70, 80]
        }, {
            name: "Exam",
            data: [20, 30, 40, 50, 60]
        }, {
            name: "Quiz",
            data: [0, 10, 20, 30, 40]
        }],
        options: {
            chart: {
                height: 285,
                type: 'line',
                zoom: {
                    enabled: false
                }, toolbar: {
                    show: false
                }
            },
            markers: {
                showNullDataPoints: true,
            },
            legend: {
                show: false
            },
            colors: ["#ffe5ee", "#40189d66", "#c7f2ff"],
            stroke: {
                width: [6, 8, 7],
                curve: 'smooth',
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['january', 'February', 'March', 'April', 'May'],
                tickPlacement: 'on',
            },
            yaxis: {
                min: 0,
                max: 100,
                tickAmount: 5,
            }
        },
    }




    return (
        <div className="monthly-wrap">
            <div className="performance-top">
                <h3>User performance</h3>
                <div className="labels xfttfx">
                    <div className="girls">
                        <p>Exam</p>
                        <label className="swuitch">
                            <input type="checkbox" />
                            <span className="slider slidx"></span>
                        </label>
                    </div>
                    <div className="girls">
                        <p>Test</p>
                        <label className="swuitch">
                            <input type="checkbox" />
                            <span className="slider slidxx"></span>
                        </label>
                    </div>
                    <div className="girls">
                        <p>Quizz</p>
                        <label className="swuitch">
                            <input type="checkbox" />
                            <span className="slider slidxxx"></span>
                        </label>
                    </div>
                </div>
                <div className="selectorrsss">
                    <select>
                        <option value="Monthly">Monthly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Monthly">Monthly</option>
                    </select>
                </div>
            </div>
            <div className="moremonth-wrap">
                <div className="monthly-chart">
                    <ReactApexChart options={data.options} series={data.series} type="line" height={285} width={"100%"} />
                </div>
                <div className="monthly-texts">
                    <div className="single-month more">
                        <span>Test</span>
                        <h1>11,234</h1>
                    </div>
                    <div className="single-month moree">
                        <span>Quiz</span>
                        <h1>11,234</h1>
                    </div>
                    <div className="single-month moreee">
                        <span>Exam</span>
                        <h1>11,234</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Monthly