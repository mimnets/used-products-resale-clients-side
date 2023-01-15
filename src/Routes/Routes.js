import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ShowCategoryItems from "../Pages/Home/Categories/ShowCategoryItems";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/phone-listings/:id',
                element: <ShowCategoryItems></ShowCategoryItems>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    }    
])