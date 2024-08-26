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
          loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
        },
        {
          path: "/purchase/:id",
          element: <PurchaseFood/>,
          loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)

        },
        {
          path: "/gallery",
          element: <Gallery/>,
          loader: () => fetch(`http://localhost:5000/gallery`)

        },
        {
          path: "/addedItem",
          element: <AddedFoods />
        },
        {
          path: "/updateAddedItem/:id",
          element: <UpdateAddedFood/>,
          loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)

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