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
            <Topbar
                isOpenSideBar={isOpenSideBar}
                setIsOpenSideBar={setIsOpenSideBar}
            />
            <div className="relative flex">
                <div className={`fixed top-0 left-0 h-full transition-transform duration-300 transform ${isOpenSideBar ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 z-20 w-64`}>
                    <SideBar
                        isOpenSideBar={isOpenSideBar}
                        setIsOpenSideBar={setIsOpenSideBar}
                    />
                </div>
            </div>
            <div className="flex-1 ml-0 lg:ml-64 p-1.5 md:p-5 transition-all duration-300">{router}</div>
        </div>
    );
}

export default App;
