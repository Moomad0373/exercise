import React from "react";
import { ResponsiveContainer, Line, LineChart, XAxis, Tooltip, CartesianGrid, YAxis } from "recharts";
import useFetch from "../../../Hooks/Hooks";

const Chart = () => {
    const { posts, isPending, error } = useFetch({
        plus: "chartdata.json",
    });
    return (
        <div className="p-4 shadow-md shadow-zinc-800 bg-zinc-800 rounded-md">
            <h3 className="gap-y-5 text-xl">Monthly Sale</h3>
            <ResponsiveContainer
                width={"100%"}
                aspect={"6"}
            >
                <LineChart
                    data={posts}
                    width={600}
                    height={300}
                >
                    <XAxis
                        dataKey="name"
                        stroke="#519DE9"
                    />
                    <YAxis domain={["auto", "auto"]} />
                    <Line
                        type={"monotone"}
                        dataKey={"Sale"}
                        stroke="#519DE9"
                        dot={false}
                    />
                    <Tooltip />

                    <CartesianGrid
                        stroke="#ccc"
                        strokeDasharray="10"
                        strokeOpacity={0.2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
