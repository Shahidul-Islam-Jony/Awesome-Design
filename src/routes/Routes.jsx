import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <div>Hello</div>
            }
        ]
    }
])
export default router;
