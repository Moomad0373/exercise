import React from "react";
import HomeFeatures from "../../Components/Components/HomeFeatues/HomeFeatures";
import Chart from "../../Components/Components/Chart/chart";
import xAxisData from "../../Datas";

const Home = () => {
    return (
        <div className="flex-[4]">
            <div className="xxl:container px-20 flex flex-col">
                <HomeFeatures />
                <Chart title="Monthly Sale" data={xAxisData} dataKey="Sale" grid />
            </div>
        </div>
    );
};

export default Home;
