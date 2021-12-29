import React from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

const data = [
    { name: 'Company A', value: 400 },
    { name: 'Company B', value: 300 },
    { name: 'Company C', value: 300 },
    { name: 'Company D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const MyPieChart = () => {
    return (
        <div style={{ width: "500px", background: "#1A1C23", margin: "55px auto",padding: "10px" }}>

            <PieChart width={800} height={400} >
                <Legend  align='left' verticalAlign="bottom" />
                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={1}
                    dataKey="value"
                    label={data.name}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default MyPieChart;