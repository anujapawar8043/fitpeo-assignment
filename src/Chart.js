import React from 'react';
import './styles/Chart.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name:  
 '5', uv: 4000 },
  { name: '6', uv: 3000 },
  { name: '7', uv: 2000 },
  { name: '8', uv: 2780 },
  { name: '9', uv: 1890 },
  { name: '10', uv: 2390 },
  { name: '11', uv: 3490 },
];

function Chart({ title }) {
  return (
    <div className="chart">
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" height={190}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>  

      </ResponsiveContainer>
    </div>  

  );
}

export default Chart;