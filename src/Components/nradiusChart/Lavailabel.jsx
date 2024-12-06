import React, { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { data } from "../../result.js"; 
import './l.scss'





function Lavailabel() {
  
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const processedData = data
      .map(item => ({
        product: item.product,
        availability: parseFloat(item.availability_in_mt_ || "0"),
      }))
      .filter(item => item.availability > 0)  
      .sort((a, b) => a.availability - b.availability) 
      .slice(0, 5);  

    
    const chartFormattedData = processedData.map(item => ({
      name: item.product, 
      [item.product]: item.availability, 
    }));

    const stackedData = chartFormattedData.map(item => ({
      name: item.name,
      ...item,
    }));

    setChartData(stackedData); 
  }, []);

  return (
    <div className="least">
      <h1>Least Availability</h1>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {chartData.map((entry, index) => (
            <Area
              key={index}
              type="monotone" 
              dataKey={entry.name}
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Lavailabel;
