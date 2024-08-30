import Home from "./Pages/Home/Home";
import NewUser from "./Pages/NewUser/NewUser";
import UsersList from "./Pages/Users/UsersList";
import Products from "./Pages/Products/Products";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/users", element: <UsersList /> },
    { path: "/newUser", element: <NewUser /> },
    { path: "/Products", element: <Products /> },
];
export default routes;
