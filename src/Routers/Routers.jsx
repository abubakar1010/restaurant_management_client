import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <div className=" text-7xl font-bold p-16 bg-lime-700">Hello world!</div>,
    },
  ]);

  export default router