import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import AddBook from "../Pages/AddBook";
import Privetroute from "./Privetroute";
import AllBook from "../Pages/AllBook";
import BookCategoryDetails from "../Pages/BookCategoryDetails";
import BorrowedBooks from "../Pages/BorrowedBooks";
 
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
                element: <Privetroute><AddBook></AddBook></Privetroute>,
            },
            {
                path:'/addbook/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/addbooks/${params.id}`),
                element: <Privetroute><BookCategoryDetails></BookCategoryDetails></Privetroute>,
            },
            {
                path:'/allbook',
                element: <Privetroute><AllBook></AllBook></Privetroute>,
            },
            {
                path:'/borrowed',
                element: <Privetroute><BorrowedBooks></BorrowedBooks></Privetroute>,
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