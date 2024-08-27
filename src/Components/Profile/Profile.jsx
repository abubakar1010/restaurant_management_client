import {
    ChevronDownIcon,
  } from "@heroicons/react/24/solid";
import { Avatar, Button, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Profile = () => {

  const {user} = useContext(AuthContext)

  // profile menu component
  const profileMenuItems = <>
  <li>
    <Link to={"/addedItem"}>
    <Button fullWidth variant="text">My added food items </Button>
    </Link>
    </li>
  <li>
    <Link to={"/addItem"}>
    <Button fullWidth variant="text">Add a food item </Button>
    </Link>
    </li>
  <li>
    <Link to={"/myOrdered"}>
    <Button fullWidth variant="text">My ordered food items </Button>
    </Link>
    </li>
  </>

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);


  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={user?.photoURL}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
      <MenuItem
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded `}
            >
              
              <Typography
                as="li"
                variant="small"
                className="font-normal"
              >
                <ul>
                  {profileMenuItems}
                </ul>
              </Typography>
            </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Profile;
