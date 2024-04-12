import {RouterProvider} from "react-router-dom";
import {application, authentication} from "./router/index.jsx";
import {useRecoilValue} from "recoil";
import {authenticationData} from '@/recoil/atom/authentication.js'

const App = () => {
    const {token} = useRecoilValue(authenticationData)

    const checkRouter = {
        'isAuthenticated': application ,
        'notAuthenticated':  authentication,
    }


    return (
        <>
            <RouterProvider router={checkRouter[token]}/>
        </>
    )
}

export default App
