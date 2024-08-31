import React from "react";

const HomeFeatures = () => {
    return (
        <div className="flex flex-col md:flex-row md:space-x-4 mt-10">
            <div className="w-full lg:w-1/3 mb-4 md:mb-0 bg-zinc-800 p-5 lg:py-7 rounded-md">
                <div className="py-3">
                    <span>Revenue</span>
                    <div className="flex gap-x-3 items-center">
                        <span className="text-lg lg:text-2xl font-bold">$ 2,415</span>
                        <span className="flex gap-x-2">
                            -11.4
                            <svg className="text-red-700 size-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                            </svg>
                        </span>
                    </div>
                    <span>Compared to Last Month</span>
                </div>
            </div>
            <div className="w-full lg:w-1/3 mb-4 md:mb-0 bg-zinc-800 p-5 lg:py-7 rounded-md">
                <div className="py-3">
                    <span>Revenue</span>
                    <div className="flex gap-x-3 items-center">
                        <span className="text-lg lg:text-2xl font-bold">$ 2,415</span>
                        <span className="flex gap-x-2">
                            -11.4
                            <svg className="text-red-700 size-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                            </svg>
                        </span>
                    </div>
                    <span>Compared to Last Month</span>
                </div>
            </div>
            <div className="w-full lg:w-1/3 mb-4 md:mb-0 bg-zinc-800 p-5 lg:py-7 rounded-md">
                <div className="py-3">
                    <span>Revenue</span>
                    <div className="flex gap-x-3 items-center">
                        <span className="text-lg lg:text-2xl font-bold">$ 2,415</span>
                        <span className="flex gap-x-2">
                            -11.4
                            <svg className="text-red-700 size-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                            </svg>
                        </span>
                    </div>
                    <span>Compared to Last Month</span>
                </div>
            </div>
        </div>
    );
};

export default HomeFeatures;
