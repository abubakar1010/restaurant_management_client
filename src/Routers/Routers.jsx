import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllFoods from "../Pages/AllFoods/AllFoods";
import FoodsDetails from "../Pages/FoodsDetails/FoodsDetails";
import PurchaseFood from "../Pages/PurchaseFood/PurchaseFood";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
          loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
        },
        {
          path: "/purchase/:id",
          element: <PurchaseFood/>,
          loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)

        }
      ]
    },
  ]);

  export default router