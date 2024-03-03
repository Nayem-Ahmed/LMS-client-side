import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import AddBook from "../Pages/AddBook";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path:'/addbook',
                element: <AddBook></AddBook>,
            },
            {
                path:'/signup',
                element:  <Signup></Signup>,
            },
            {
                path:'/login',
                element: <Login></Login>,
            },
        ]
    }
])
export default router;