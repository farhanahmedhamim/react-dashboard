import React from 'react'
import '../components/styles/performance.css'
import ReactApexChart from 'react-apexcharts'

const Performance = () => {


    const data = {
        series: [
            {
                name: "Test",
                data: [40, 45, 50, 55, 60, 65, 70, 75, 80, 80]
            },
            {
                name: "Exam",
                data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 70]
            },
            {
                name: "Quiz",
                data: [20, 25, 30, 35, 40, 45, 50, 55, 60, 60]
            },
            {
                name: "Overall Performance",
                data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 50]
            }
        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
                toolbar: false
            },
            colors: ["#F58634", "#7D0B7F", "#4766F9", "#40189D"],
            stroke: {
                curve: 'smooth',
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 0.5
                },
            },
            yaxis: {
                min: 0,
                max: 80,
                tickAmount: 4,
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'March', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            }
        },
    }

    return (
        <div className="performance-wrap">
            <div className="performance-top lerixs">
                <h3>User performance</h3>
                <div className="labels">
                    <div className="girls">
                        <label className="swuitch">
                            <input type="checkbox" />
                            <span className="slider slideo"></span>
                        </label>
                    </div>
                    <div className="girls">
                        <p>Quizz</p>
                        <label className="swuitch">
                            <input type="checkbox" />
                            <span className="slider slidet"></span>
                        </label>
                    </div>
                    <div className="girls">
                        <p>Test</p>
                        <label className="swuitch">
                            <input type="checkbox" />
                            <span className="slider slidett"></span>
                        </label>
                    </div>
                    <div className="girls">
                        <p>Exam</p>
                        <label className="swuitch">
                            <input type="checkbox" />
                            <span className="slider slidef"></span>
                        </label>
                    </div>
                </div>
                <div className="selectorrs">
                    <select>
                        <option value="This Year">This Year</option>
                        <option value="This Year">This Year</option>
                        <option value="This Year">This Year</option>
                    </select>
                </div>
            </div>
            <div className="performance-bottom">
                <ReactApexChart options={data.options} series={data.series} type="line" height={350} />
            </div>
        </div>
    )
}

export default Performance