import Authentication from "@/feature/Authentication/page/index.jsx";
import Login from "@/feature/Authentication/page/Login/index.jsx";
import NotFound from "@/feature/Authentication/page/NotFound/index.jsx";

export const authenticationRouter = [
    {
        path: '/',
        element: <Authentication/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Login/>
            }
        ]
    }
]