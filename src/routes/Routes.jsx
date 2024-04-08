import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import LoginRegistration from "../pages/LoginRegistration/LoginRegistration";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/login",
                element:<LoginRegistration></LoginRegistration>
            }
        ]
    }
])
export default router;
