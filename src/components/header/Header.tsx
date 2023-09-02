import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../../assets/Apple-logo-white.png";
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "black",
          height: "100px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <img src={Logo} alt="logo" width={18} height={20} />    iTunes
            </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
