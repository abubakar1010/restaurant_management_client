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
    <Button fullWidth variant="text"><Link to={"/addedItem"}>My added food items</Link> </Button>
    </li>
  <li>
    <Button fullWidth variant="text"><Link to={"/addItem"}>Add a food item</Link> </Button>
    </li>
  <li>
    <Button fullWidth variant="text"><Link to={"/myOrdered"}>My ordered food items</Link> </Button>
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
