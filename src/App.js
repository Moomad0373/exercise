import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Topbar from "./Components/Components/Topbar/Topbar";
import SideBar from "./Components/Components/SideBar/sideBar";
function App() {
    const router = useRoutes(routes);

    return (
        <div className="text-white">
            <Topbar />
            <div className="flex">
                <SideBar />
                {router}
            </div>
        </div>
    );
}

export default App;
