"use client"
import React, { useEffect } from 'react'
import ReactApexChart from 'react-apexcharts';
import { useState } from 'react';
import axios from 'axios';
import { ColorizeSharp } from '@mui/icons-material';


const Performance = () => {
    const [chartData, setChartData] = useState({}) // satate to store the performance data from api
    // graph properies stored in option state
    const [options, setOptions] = useState({
        series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
            colors : 'red'
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
          ],
        }
    }); 
    // making an api call 
    useEffect(()=>{
        axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
        .then(res => {
          setChartData(res.data.dasbhoardPage.performance)
          // console.log(res.data.dasbhoardPage.performance)
        })
        .catch(err => console.log(err))
        
      },[])
      // component didupdate is created ... if the chartData is changed then upadate the values of x-axis and y-axis
      useEffect(()=>{
        updateGraphValues()
      },[chartData])
      const  updateGraphValues =()=>{
        let yAxisData = Object.values(chartData) // stored all the values like 30,40, 60, are stored here
        let xAxisData = Object.keys(chartData)  // stored all key colours aqua and all   and then updating that with graph values 
        // console.log(yAxisData,xAxisData)
        // const updatedColors = xAxisData.map((category, index) => `color${index + 1}`);
        setOptions({...options, 
          series:[{
            data: yAxisData
        }],
        xaxis: {
          categories: xAxisData
        },plotOptions: {
          ...options.plotOptions,
          bar: {
            ...options.plotOptions.bar,
          }
        }
      })


      }
      // console.log(xAxisData)
    // console.log(yAxisData)
  return (
    <div>
         <ReactApexChart options={options} series={options.series} type="bar" height={350} />;
    </div>
  )
}

export default Performance