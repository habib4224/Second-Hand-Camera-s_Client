
import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from '../Layout/DashboardLayout/DashboardLayout';
import Main from "../Layout/Main/Main";
import AllAvailablsProduts from '../Pages/AllAvailablsProduts/AllAvailablsProduts';
import AllUser from '../Pages/AllUser/AllUser';
import Blog from '../Pages/Blog/Blog';
import AddProducts from '../Pages/DashBoardAll/AddProducts/AddProducts';
import MyAllProducts from '../Pages/DashBoardAll/MyAllProducts/MyAllProducts';
import MyOrders from '../Pages/DashBoardAll/MyOrders/MyOrders';
import EachCatagories from '../Pages/EachCatagories/EachCatagories';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import PaseError from '../Pages/Shared/PaseError/PaseError';
import AdminRoute from './AdminRoute/AdminRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '*',
                element: <PaseError></PaseError>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/allavailableproducts',
                element: <PrivateRoute><AllAvailablsProduts></AllAvailablsProduts></PrivateRoute>
            },
            {
                path: '/allProducts/:id',
                element: <PrivateRoute><EachCatagories></EachCatagories></PrivateRoute>,
                loader: ({ params }) => fetch(`https://reselling-your-camera-server.vercel.app/allProducts/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout> </PrivateRoute>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUser></AllUser> </AdminRoute>
            },
            {
                path: '/dashboard/allProducts/:email',
                element: <MyAllProducts></MyAllProducts>,
                loader: ({ params }) => fetch(`https://reselling-your-camera-server.vercel.app/allProducts/${params.email}`)
            },

            {
                path: '/dashboard/addproducts',
                element: <AddProducts></AddProducts>
            },
        ]
    },
])
export default router;