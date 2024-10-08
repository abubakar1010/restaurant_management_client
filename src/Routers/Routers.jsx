import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllFoods from "../Pages/AllFoods/AllFoods";
import FoodsDetails from "../Pages/FoodsDetails/FoodsDetails";
import PurchaseFood from "../Pages/PurchaseFood/PurchaseFood";
import Gallery from "../Pages/Gallery/Gallery";
import AddedFoods from "../Pages/AddedFoods/AddedFoods";
import UpdateAddedFood from "../Pages/UpdateAddedFood/UpdateAddedFood";
import AddFoodItem from "../Pages/AddFoodItem/AddFoodItem";
import Orders from "../Pages/Orders/Orders";
import Error from "../Pages/Error/Error";
import PrivateRoute from "../Private/PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/allFoods",
          element: <AllFoods />
        },
        {
          path: "/foodsDetails/:id",
          element: <FoodsDetails />,
          loader: ({params}) => fetch(`https://restaurant-management-server-gray.vercel.app/food/${params.id}`)
        },
        {
          path: "/purchase/:id",
          element: <PrivateRoute><PurchaseFood/></PrivateRoute>,
          

        },
        {
          path: "/gallery",
          element: <PrivateRoute><Gallery/></PrivateRoute>,
          loader: () => fetch(`https://restaurant-management-server-gray.vercel.app/gallery`)

        },
        {
          path: "/addedItem",
          element: <AddedFoods />
        },
        {
          path: "/updateAddedItem/:id",
          element: <UpdateAddedFood/>,
          loader: ({params}) => fetch(`https://restaurant-management-server-gray.vercel.app/food/${params.id}`)

        },
        {
          path: "/addItem",
          element: <AddFoodItem/>

        },
        {
          path: "/myOrdered",
          element: <Orders/>
        }
      ]
    },
  ]);

  export default router