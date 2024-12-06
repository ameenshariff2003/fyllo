import React, { useState } from 'react';
import { data } from '../../result'; // 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './lineGraph.scss'

const NewLineCharts = () => {

  const [selectFerti,SetSelectFerti]=useState("")

  
  // Aggregate data by month
  const aggregatedData = data
    .filter(entry => entry.product === selectFerti) 
    .reduce((acc, entry) => {
      const month = entry.month;
      if (!acc[month]) {
        acc[month] = { requirement: 0, availability: 0 };
      }
      acc[month].requirement += parseFloat(entry.requirement_in_mt_);
      acc[month].availability += parseFloat(entry.availability_in_mt_);
      return acc;
    }, {});

  const chartData = Object.keys(aggregatedData).map(month => ({
    month,
    ...aggregatedData[month],
  }));

  console.log(chartData);

  return (
    <div className='line-graph'>
    <div  >
        <input type="text" list="fertilizers" className="input" placeholder='Enter Name of Fertilizer' onChange={(e)=>SetSelectFerti(e.target.value)}/>
        <datalist id="fertilizers">
    <option value="MOP" />
    <option value="DAP"/>
    <option value="MAP" />
    <option value="NPK" />
    <option value="SSP" />
    <option value="TSP" />
    <option value="UREA" />


</datalist>
    </div>
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="requirement" stroke="#8884d8" />
          <Line type="monotone" dataKey="availability" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default NewLineCharts;
