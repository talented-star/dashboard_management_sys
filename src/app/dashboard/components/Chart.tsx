"use client"

import React, {useMemo} from 'react';
import EChartsReact from 'echarts-for-react';

const BarChart = () => {
    const chartOptions = useMemo(
        () => ({
          tooltip: {
            trigger: "item"
          },
          series: [
            {
              type: "pie",
              radius: "70%",
            //   padAngle: 3,
              data: [
                { value: 1048, name: "Search Engine", itemStyle: {color : "#2563EB"} },
                { value: 735, name: "Direct", itemStyle: {color : "#C084FC"} },
                { value: 580, name: "Email", itemStyle: {color : "#FB923C"} },
                { value: 484, name: "Union Ads", itemStyle: {color : "#22C55E"} },
              ],
              label: {
                show: false,
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                }
              }
            }
          ]
        }),
        []
      );
    
      return (
        <div className='w-[25%]'>
          <EChartsReact option={chartOptions} />
        </div>
      );
}

export default BarChart;