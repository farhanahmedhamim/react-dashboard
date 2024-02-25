import React from 'react'
import '../components/styles/customers.css'
import ReactApexChart from 'react-apexcharts'

const Customers = () => {

    const data = {
        series: [40, 30, 30],
        options: {
            chart: {
                type: 'donut',
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#5F59CB", "#00CDFF", "#00ADBA"],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
    }


    return (
        <div className="customers-container">
            <div className="customes-text">
                <h2>Customers</h2>
                <p>Lorem ipsum dolor sit amet</p>
                <div className="customer-rating">
                    <div className="singles-reating">
                        <h1 className="colorone">40%</h1>
                        <span>Current Student</span>
                    </div>
                    <div className="singles-reating">
                        <h1 className="colortwo">30%</h1>
                        <span>New Student</span>
                    </div>
                    <div className="singles-reating">
                        <h1 className="collorthree">30%</h1>
                        <span>Register Student</span>
                    </div>
                </div>
            </div>
            <ReactApexChart options={data.options} series={data.series} type="donut" />
        </div>
    )
}

export default Customers