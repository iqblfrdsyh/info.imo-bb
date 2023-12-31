import {
  CubeTransparentIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { List, ListItem, Typography } from "@material-tailwind/react";
import NavListMenu from "./navListMenu";

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/"
        variant="small"
        color="white"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <HomeIcon className="h-[18px] w-[18px]" />
          Home
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="white"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <CubeTransparentIcon className="h-[18px] w-[18px]" />
          Whats News ?
        </ListItem>
      </Typography>
    </List>
  );
}

export default NavList;
