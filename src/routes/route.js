import { useRoutes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { SignupPage } from "../pages/SignupPage"
import GetInfo from "../pages/GroupGetInfo/GetInfo"
import { LetsStartPage } from "../pages/LetsStartPage"

export const useRouters = () => {
    return useRoutes([
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/signup",
            element: <SignupPage/>,
        },
        {
            path: "/createuser",
            element: <GetInfo/>
        },
        {
            path: "/letsstart",
            element: <LetsStartPage/>
        }
    ])
}