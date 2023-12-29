import { useRoutes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { SignupPage } from "../pages/SignupPage"

export const useRouters = () => {
    return useRoutes([
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/signup",
            element: <SignupPage/>,
        }
    ])
}