import React from 'react'
import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import Chart from 'react-apexcharts'
const chartOptions = {
  series: [{
      name: 'Online Customers',
      data: [40,70,20,90,36,80,30,91,60]
  }, {
      name: 'Store Customers',
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
  }],
  options: {
      color: ['#6ab04c', '#2980b9'],
      chart: {
          background: 'transparent'
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth'
      },
      xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      legend: {
          position: 'top'
      },
      grid: {
          show: false
      }
  }
}
function FeaturedInfo() {
  return (
    <div className="featured">
    <div className="featuredItem">

    <Chart 
                            options={{chart: {
                              id: "basic-bar"
                            }}}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                          
                        />
      {/* <span className="featuredTitle">Revanue</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">$2,415</span>
        <span className="featuredMoneyRate">
          -11.4 <ArrowDownward  className="featuredIcon negative"/>
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span> */}
    </div>



    <div className="featuredItem">
    <Chart 
                           options={{chart: {
                            id: "basic-bar"
                          }}}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                            width='100%'
                        />
    </div>
    <div className="featuredItem">
    <Chart
                            options={{chart: {
                              id: "basic-bar"
                            }}}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
    </div>
  </div>
  )
}

export default FeaturedInfo