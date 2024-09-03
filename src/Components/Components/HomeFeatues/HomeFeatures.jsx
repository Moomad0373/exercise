import React from "react";
import HomeSubFeature from "./HomeSubFeature";

const HomeFeatures = () => {
    return (
        <div className="flex flex-col md:flex-row md:space-x-4 mt-10 last:mb-0">
            <HomeSubFeature price="2,415" change="+1.2" grow={true} />
            <HomeSubFeature price="1,982" change="-11.4" grow={false} />
            <HomeSubFeature price="9,476" change="+5" grow={true} />
        </div>
    );
};

export default HomeFeatures;
