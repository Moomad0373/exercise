import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Topbar from "./Components/Components/Topbar/Topbar";
import SideBar from "./Components/Components/SideBar/sideBar";
import React, { useState } from "react";

function App() {
    const router = useRoutes(routes);
    const [isOpenSideBar, setIsOpenSideBar] = useState(false);

    return (
        <div className="text-white">
            <Topbar isOpenSideBar={isOpenSideBar} setIsOpenSideBar={setIsOpenSideBar} />
            <div className="relative flex">
                <div
                    className={`fixed top-0 md:top-[72px] left-0 h-full transition-transform duration-300 transform ${
                        isOpenSideBar ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 z-20 w-64`}
                >
                    <SideBar isOpenSideBar={isOpenSideBar} />
                </div>
            </div>
            <div className="flex-1 ml-0 md:ml-64 p-5 transition-all duration-300">{router}</div>
        </div>
    );
}

export default App;
