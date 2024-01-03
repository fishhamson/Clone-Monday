import { useRoutes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { SignupPage } from "../pages/SignupPage"
import { CreatePage } from "../pages/CreatePage"

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
            element: <CreatePage/>
        },
    ])
}