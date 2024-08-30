import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {


    return (
        <>
            <Link to="/header" className="text-white text-2xl px-5">
                Header
            </Link>
            <Link to="/test" className="text-white text-2xl px-5">
                Test
            </Link>
        </>
    );
};

export default HomePage;
