import React from "react";

const HomeSubFeature = ({ price, change, grow }) => {
    return (
        <>
            <div className="w-full lg:w-1/3 mb-4 md:mb-0 bg-zinc-800 p-5 lg:py-7 rounded-md">
                <div className="py-3">
                    <span>Revenue</span>
                    <div className="flex gap-x-3 items-center">
                        <span className="text-lg lg:text-2xl font-bold">$ {price}</span>
                        <span className="flex gap-x-2">
                            {change}
                            {grow ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-emerald-700 size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-red-700 size-5">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                                    />
                                </svg>
                            )}
                        </span>
                    </div>
                    <span>Compared to Last Month</span>
                </div>
            </div>
        </>
    );
};

export default HomeSubFeature;
