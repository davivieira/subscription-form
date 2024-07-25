import { Toolbar } from "@mui/material";
import {
  SCAppBar,
  SCTitle,
} from "./NavBar.styles";

function NavBar() {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      event.preventDefault();
      window.location.reload();
    }
  };

  return (
    <SCAppBar position="static">
      <Toolbar>
        <SCTitle data-testid="title" variant="h6" onClick={handleClick}>
          Subscription Form (React + TypeScript + Vite)
        </SCTitle>
      </Toolbar>
    </SCAppBar>
  );
}

export default NavBar;
