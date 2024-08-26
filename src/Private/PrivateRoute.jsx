import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import PropTypes from "prop-types";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className=" flex justify-center items-center">
        <Spinner className=" h-24 w-24 t" color="purple" />
      </div>
    );
  }

  if (user?.email) {
    return children;
  }
  return (
    <>
      <Navigate state={location.pathname} to={"/login"} replace></Navigate>
    </>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
