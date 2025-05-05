import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import AllTreatments from "../Components/AllTreatments/AllTreatments";
import MyAppointments from "../Components/MyAppointments/MyAppointments";
import Profile from "../Components/Profile/Profile";
import Details from "../Components/Details.jsx/Details";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    const servicesRes = await fetch('/service.json')
                    const servicesData = await servicesRes.json()

                    const feedBackRes = await fetch('/feedback.json')
                    const feedBackData = await feedBackRes.json()

                    return { servicesData, feedBackData }
                }
            },
            {
                path: '/allTreatments',
                element: <AllTreatments></AllTreatments>,
                loader: () => fetch('/service.json')
            },
            {
                path: '/appointments',
                element: <PrivateRoute>
                    <MyAppointments></MyAppointments>
                </PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute>
                    <Details></Details>
                </PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await fetch('/service.json')
                    const data = await res.json()
                    // console.log(data, params.id)
                    const singleData = data.find(d => d.id == params.id)

                    return singleData
                }
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])