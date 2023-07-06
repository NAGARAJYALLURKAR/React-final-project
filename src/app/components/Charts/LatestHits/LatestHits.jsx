"use client"

import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios'

const LatestHits = () => {
    const [series, setSeries] = useState( [
        {
          name: "feature",
          data: []
        },
        {
            name: "latest",
            data: []
        },
        {
            name: "popular",
            data: []
        }
      ]

    )
    const [options, setoptions] = useState({
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth',
              width: '2'
            },
            title: {
              text: 'Latest Hints',
              align: 'left',
              style:{
                color: '#ffffff'
              }
            },
            grid: {
              position:'front',
                backdrop: {
                  enabled: true, // Enable the backdrop
                  borderWidth: 1,
                  color:'#111' // Set the border width to 0 to hide the grid lines
                }
              },
            xaxis: {
              categories: [],
              labels: {
                style: {
                  colors: '#fff' // Set the font color for the x-axis labels
                }
              }
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                labels:{
                    color:'#fff'                           
                }
            },
            yaxis: {
                title: {
                  text: 'Hits',
                  style:{
                    color:'#fff'
                  }
                },
              labels: {
                style: {
                  colors: '#fff' // Set the font color for the x-axis labels
                }
              },
              grid: {
                position: 'front',
                borderColor: '#111'
              }
            } 
        })
        useEffect(() =>{
            axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json ')
            .then(res =>{

                console.log(res.data.dasbhoardPage)
                localStorage.setItem("apiData", JSON.stringify(res.data))
                let featured = res.data.dasbhoardPage.latestHits.featured
                let latest = res.data.dasbhoardPage.latestHits.latest
                let popular = res.data.dasbhoardPage.latestHits.popular
                let months = res.data.dasbhoardPage.latestHits.months
                setSeries([
                    {
                      name: "featured",
                      data: featured
                    },
                    {
                        name: "latest",
                        data: latest
                    },
                    {
                        name: "popular",
                        data: popular
                    }

                  ]

                )
                setoptions({
                    chart: {
                      height: 350,
                      type: 'line',
                      zoom: {
                        enabled: false
                      }
                    },
                    dataLabels: {
                      enabled: false
                    },
                    stroke: {
                      curve: 'smooth',
                      width: '2'
                    },
                    title: {
                      text: 'Latest Hints',
                      align: 'left',
                      style:{
                        color: '#ffffff'
                      }
                    },
                    grid: {
                      position:'front',
                        backdrop: {
                          enabled: true, // Enable the backdrop
                          borderWidth: 1,
                          color:'#111' // Set the border width to 0 to hide the grid lines
                        }
                      },
                    xaxis: {
                      categories: months,
                      labels: {
                        style: {
                          colors: '#fff' // Set the font color for the x-axis labels
                        }
                      }
                    },
                    legend: {
                        position: 'top',
                        horizontalAlign: 'center',
                        labels:{
                            color:'#fff'                           
                        }
                    },
                    yaxis: {
                        title: {
                          text: 'Hits',
                          style:{
                            color:'#fff'
                          }
                        },
                      labels: {
                        style: {
                          colors: '#fff' // Set the font color for the x-axis labels
                        }
                      }
                      }
                })
            })
            .catch(err => console.log(err))
        },[])
  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="line" height={300} width={400} />
    </div>
  );
};

export default LatestHits;