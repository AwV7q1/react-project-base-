import Application from "@/feature/Application/page/index.jsx";
import Report from "@/feature/Application/page/Report/index.jsx";
import Statistics from "@/feature/Application/page/Statistics/index.jsx";
import NotFoundApplication from "@/feature/Application/page/NotFound/index.jsx";


export const applicationRouter = [
    {
        path: '/',
        element: <Application/>,
        errorElement: <NotFoundApplication/>,
        children: [
            {
                index: true,
                element: <Report/>
            },
            {
                path: 'statistic',
                element: <Statistics/>
            }
        ]
    },
]