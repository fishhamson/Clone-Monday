import { useRoutes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { SignupPage } from "../pages/SignupPage"
import { CreatePage } from "../pages/CreatePage"
import { InvitationPage } from "../pages/InvitationPage"
import { SelectPage } from "../pages/SelectPage"

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
        {
            path: "/invitation",
            element: <InvitationPage/>
        },
        {
            path: "/select",
            element: <SelectPage/>
        }
    ])
}