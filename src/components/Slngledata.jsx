import React from 'react'
import '../components/styles/singledata.css'
import a from '../pages/images/Vector22.svg'
import ReactApexChart from 'react-apexcharts'

const SIngledata = ({ groth, meaning, percent }) => {

  const data = {
    series: [65],
    options: {
      chart: {
        type: 'radialBar',
        foreColor: '#000'
      },

      colors: ['#40189D'],
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
            size: '32%',
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
      labels: ['60k'],
    },
  }



  return (
    <div className="single-data">
      <div className="datasingle-left">
        <p>{groth}</p>
        <div className="percent">
          <h3><span>{percent}</span> {meaning}</h3>
        </div>
        <img src={a} alt="" />
      </div>
      <div className="datasingle-right">
        <span className="data-percent">80%</span>
        <ReactApexChart options={data.options} series={data.series} type="radialBar" height={window.innerWidth > 430 ? 220 : 180} />
      </div>
    </div>
  )
}

export default SIngledata