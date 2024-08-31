import React from "react";
import { ResponsiveContainer, Line, LineChart, XAxis, Tooltip, CartesianGrid } from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
    return (
        <div className="p-4 shadow-md shadow-zinc-800 bg-zinc-800 rounded-md">
            <h3 className="gap-y-5 text-xl">{title}</h3>
            <ResponsiveContainer width={"100%"} aspect={"4"}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#519DE9" />
                    <Line type={"monotone"} dataKey={dataKey} stroke="#519DE9" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#374151" strokeDasharray="10" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
