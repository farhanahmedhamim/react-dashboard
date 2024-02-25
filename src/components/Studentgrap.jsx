import React from 'react';
import '../components/styles/studentgrap.css';
import ReactApexChart from 'react-apexcharts';




const Studentgrap = () => {
    const data = {
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                colors: ['#40189d', '#df00df']
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },

    };

    return (
        <div className="student-grap">
            {/* <div className="student-top">
                <h1>Student Graph</h1>
                <div className="labels mmmmmm">
                    <div className="girls">
                        <p>Girls</p>
                        <label className="swuitch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div className="girls">
                        <p>Boys</p>
                        <label className="swuitch">
                            <input type="checkbox" />
                            <span className="slider slide"></span>
                        </label>
                    </div>
                </div>
            </div> */}
            <div className="student-bottom">
                <ReactApexChart options={data.options} series={data.series} type="area" height={285} width={'100%'} />
            </div>
        </div>
    );
};

export default Studentgrap;
