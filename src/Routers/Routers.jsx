import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllFoods from "../Pages/AllFoods/AllFoods";
import FoodsDetails from "../Pages/FoodsDetails/FoodsDetails";

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
          path: "/foodsDetails/:name",
          element: <FoodsDetails />,
          loader: ({params}) => fetch(`http://localhost:5000/foods/${params.name}`)
        }
      ]
    },
  ]);

  export default router