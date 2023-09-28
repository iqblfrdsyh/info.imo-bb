import {
  Button,
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavList from "./navList";

const NavigationBar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <Navbar className=" my-5 w-full px-7 py-2 bg-transparent mx-auto fixed right-0 left-0 z-50">
      <div className="flex items-center">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <span className="text-white">Info.Imo-BB</span>
        </Typography>
        <div className="mx-auto text-blue-gray-900">
          <div className="hidden lg:block">
            <NavList />
          </div>

          <IconButton
            variant="text"
            color="white"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default NavigationBar;
