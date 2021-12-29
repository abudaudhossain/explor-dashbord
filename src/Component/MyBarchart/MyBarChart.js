import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    // CartesianGrid,
    Tooltip,
    Legend,
    // ResponsiveContainer
} from "recharts";

const data = [
    {
        name: "Compony A",
        laptop: 4000,
        mobile: 2400,
        watch: 2400
    },
    {
        name: "Compony B",
        laptop: 3000,
        mobile: 1398,
        watch: 2210
    },
    {
        name: "Compony C",
        laptop: 2000,
        mobile: 9800,
        watch: 2290
    },
    {
        name: "Compony D",
        laptop: 2780,
        mobile: 3908,
        watch: 2000
    },
    {
        name: "Compony E",
        laptop: 1890,
        mobile: 4800,
        watch: 2181
    },
    {
        name: "Compony F",
        laptop: 2390,
        mobile: 3800,
        watch: 2500
    },
    {
        name: "Compony G",
        laptop: 3490,
        mobile: 4300,
        watch: 2100
    }
];


const MyBarChart = () => {
    return (
        <div style={{width:"500px", background:"#1A1C23", margin: "auto", padding: "10px"}}>
            <h1 style={{color: "white"}}>Bar chart</h1>
            {/* <ResponsiveContainer> */}
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="mobile" fill="#00B377" />
                    <Bar dataKey="laptop" fill="#F56600" />
                    <Bar dataKey="watch" fill="#146EFF" />
                </BarChart>
            {/* </ResponsiveContainer> */}
        </div>
    );
};

export default MyBarChart;