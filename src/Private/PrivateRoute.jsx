import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import PropTypes from 'prop-types'
const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <Spinner color="purple" />
    }

    if (user?.email) {
        return children
    }
    return (
        <>
            <Navigate state={location.pathname} to={'/login'} replace></Navigate>
        </>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;