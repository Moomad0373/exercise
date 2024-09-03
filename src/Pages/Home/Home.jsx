import React from "react";
import HomeFeatures from "../../Components/Components/HomeFeatues/HomeFeatures";
import Chart from "../../Components/Components/Chart/chart";
import { xAxisData } from "../../Datas";
import NewUsers from "../../Components/Components/NewUsers/NewUsers";
import UserTransactions from "../../Components/Components/UserTransactions/UserTransactions";
const Home = () => {
    return (
        <div className="flex-[4] text-gray-300">
            <div className="flex flex-col gap-y-10">
                <HomeFeatures />
                <Chart title="Monthly Sale" data={xAxisData} dataKey="Sale" grid />
                <div className="flex flex-col lg:flex-row justify-between lg:gap-x-10 gap-y-10">
                    <NewUsers />
                    <UserTransactions />
                </div>
            </div>
        </div>
    );
};

export default Home;
