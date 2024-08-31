import React from "react";
import HomeFeatures from "../../Components/Components/HomeFeatues/HomeFeatures";
import Chart from "../../Components/Components/Chart/chart";
import xAxisData from "../../Datas";

const Home = () => {
    return (
        <div className="flex-[4] text-gray-300">
            <div className="xxl:container px-2 lg:px-4 xl:px-16 flex flex-col gap-y-10">
                <HomeFeatures />
                <Chart title="Monthly Sale" data={xAxisData} dataKey="Sale" grid />
            </div>
        </div>
    );
};

export default Home;
