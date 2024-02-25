import React from 'react'
import '../components/styles/whisker.css'
import ReactApexChart from 'react-apexcharts'

const Whisker = () => {
    const data = {
        series: [
            {
                name: 'box',
                type: 'boxPlot',
                data: [
                    {
                        x: "Exam",
                        y: [15, 20, 25, 35, 40]
                    },
                    {
                        x: "Test",
                        y: [20, 25, 30, 40, 50]
                    },
                    {
                        x: "Quiz",
                        y: [15, 20, 33, 45, 55]
                    },
                ]
            }
        ],
        options: {
            chart: {
                type: 'boxPlot',
                height: 350,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                boxPlot: {
                    colors: {
                        upper: '#D9D9D9',
                        lower: '#D9D9D9'
                    }
                },
                bar: {
                    horizontal: true
                }
            },
            legend: {
                show: false
            },
            tooltip: {
                shared: false,
                intersect: true
            }
        },
    }

    return (
        <div className="boxplot-chart">
            <h3>Box and Whisker for  Quiz Assessments</h3>
            <ReactApexChart options={data.options} series={data.series} type="boxPlot" height={350} width={"100%"} />
        </div>
    )
}

export default Whisker