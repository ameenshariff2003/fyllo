import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import {data} from "../../result"
import "./pi.scss"
function PieCharts() {
  const [chartData, setChartData] = useState([]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

  useEffect(() => {
    const processedData = data
      .map(item => ({
        product: item.product,
        requirement: parseFloat(item.requirement_in_mt_ || "0"),
      }))
      .reduce((acc, curr) => {
        acc[curr.product] = (acc[curr.product] || 0) + curr.requirement;
        return acc;
      }, {});

    const sortedData = Object.entries(processedData)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([product, requirement]) => ({ name: product, value: requirement }));

    setChartData(sortedData);
  }, []);

  return (
    <div className="piCharts">
      <h1>Most Requirements</h1>
      <PieChart width={400} height={400}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default PieCharts;
