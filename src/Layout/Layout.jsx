import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/Shared/NavigationBar/NavigationBar";
import Footer from "../Components/Shared/Footer/Footer";


const Layout = () => {
    return (
        <div className=" container mx-auto">
            <NavigationBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;