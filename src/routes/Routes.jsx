import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import AllTreatments from "../Components/AllTreatments/AllTreatments";
import MyAppointments from "../Components/MyAppointments/MyAppointments";
import Profile from "../Components/Profile/Profile";
import Details from "../Components/Details.jsx/Details";



export const router = createBrowserRouter([
    {
        path:'/', 
        element: <MainLayout></MainLayout>, 
        children:[
            {
                path: '/', 
                element: <Home></Home>, 
                loader: async()=> {
                    const servicesRes = await fetch('/service.json')
                    const servicesData = await servicesRes.json()

                    const feedBackRes = await fetch('/feedback.json')
                    const feedBackData = await feedBackRes.json()

                    return {servicesData, feedBackData}
                }
            }, 
            {
                path: '/allTreatments', 
                element: <AllTreatments></AllTreatments>, 
                loader: ()=> fetch('/service.json')
            }, 
            {
                path: '/appointments', 
                element: <MyAppointments></MyAppointments>
            }, 
            {
                path: '/profile', 
                element: <Profile></Profile>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: async({params})=>{
                    const res = await fetch('/service.json')
                    const data = await res.json()
                    // console.log(data, params.id)
                    const singleData = data.find(d=> d.id == params.id)
                    
                    return singleData          
                }
            }
        ]
    }
])