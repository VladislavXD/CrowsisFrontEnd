import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function MediaBottomNav() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [smallScreen, setSmallScreen] = React.useState(
    window.innerWidth <= 720
  );

  React.useEffect(() => {
    const handleSize = () => {
      setSmallScreen(window.innerWidth <= 720);
    };

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return smallScreen ? (
    <BottomNavigation
      className="nav-bottom"
      sx={{ width: 900 }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Каталог"
        value="recents"
        icon={<MenuIcon />}
      />
      <Link to={"/favorites"}>
        <BottomNavigationAction
          label="Избранное"
          value="favorites"
          icon={<FavoriteIcon />}
        />
      </Link>
      <BottomNavigationAction
        label="Корзина"
        value="nearby"
        icon={<ShoppingBasketIcon />}
      />
      <Link to={"/auth"}>
        <BottomNavigationAction
          label="Профиль"
          value="folder"
          icon={<AccountBoxIcon />}
        />
      </Link>
    </BottomNavigation>
  ) : (
    ""
  );
}
