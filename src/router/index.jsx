import {createBrowserRouter} from 'react-router-dom'
import {applicationRouter} from "./routerData/application.jsx";
import {authenticationRouter} from "./routerData/authentication.jsx";

const application = createBrowserRouter(applicationRouter)
const authentication = createBrowserRouter(authenticationRouter)


export {application, authentication}