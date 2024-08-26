import React, { useContext } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Profile from "../../Profile/Profile";
import WebLogo from "../../WebLogo/WebLogo";

const NavigationBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const {logout} = useContext(AuthContext)

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const { user } = useContext(AuthContext);
  // console.log(user);



  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* <Profile/> */}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/"} className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/allFoods"} className="flex items-center">All Foods</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/gallery"} className="flex items-center">Gallery</Link>
      </Typography>

      {user?.email ? (
        <>
          <Profile />
          <Button
          onClick={ () => {
            logout()
            .then( res => {
              console.log(res);
              
            })
            .catch( error => {
              console.log(error);
              
            })
          }}
            size="sm"
            className="hidden lg:inline-block px-6 py-[10px] rounded-sm  text-white bg-gradient-to-r from-[#d0a260] to-[#c79c60da]"
          >
            <span>Log out</span>
          </Button>
        </>
      ) : (
        <Link to={"login"}>
          <Button
            size="sm"
            className="hidden lg:inline-block px-6 py-[10px] rounded-sm  text-white bg-gradient-to-r from-[#d0a260] to-[#c79c60da]"
          >
            Log In
          </Button>
        </Link>
      )}
    </ul>
  );
  return (
    <>
      <div className="">
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-none">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Link>
            <Typography
              as="div"
              
              className="mr-4 cursor-pointer py-1.5 font-medium"
            >
              <WebLogo />
            </Typography>
            </Link>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>

              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <Collapse open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1">
            {user?.email ? (
        <>
          <Button
            size="sm"
            className="px-6 py-[10px] rounded-sm  text-white bg-gradient-to-r from-[#d0a260] to-[#c79c60da]"
          >
            <span>Logout</span>
          </Button>
        </>
      ) : (
        <Link to={"login"}>
          <Button
            size="sm"
            className="px-6 py-[10px] rounded-sm  text-white bg-gradient-to-r from-[#d0a260] to-[#c79c60da]"
          >
            Log In
          </Button>
        </Link>
      )}
            </div>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavigationBar;
