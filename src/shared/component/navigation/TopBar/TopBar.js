import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Avatar,
  Badge,
  Divider,
  makeStyles,
  useTheme,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { NavContext } from "../../../context/NavContext";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { ThemeContext } from "../../../context/ThemeContext";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import { autoUpdater } from "electron";
import { useHistory } from "react-router-dom"; // For navigation

const drawerWidth = 260;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
  toggleIcon: {
    // marginRight:'1rem',
    marginLeft:'auto'
  },
profileIcon: {
    marginLeft: theme.spacing(2),
  },
  dropdown: {
    marginTop: theme.spacing(1), // To ensure the dropdown starts below the profile icon
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    width: "200px",
  },
  dropdownItem: {
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifycontent: "space-between",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },

userInfo: {
  padding: theme.spacing(2),
  textAlign: "left",
  backgroundColor: theme.palette.background.paper,
    borderBottom: "1px solid #e0e0e0",
},
badge: {
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  fontSize: "12px",
  padding: "4px 8px",
  borderRadius: "12px",
},
  hide: {
    display: "none",
  },
}));

const TopBar = ({onSignOut }) => {
  const classes = useStyles();
  const theme = useTheme();
  const navCon = useContext(NavContext);
  const themeContext = useContext(ThemeContext);
  const history = useHistory(); // For navigation

  const icon = !themeContext.themeState ? (
    <Brightness7Icon />
  ) : (
    <Brightness3Icon />
  );

  // State for the profile dropdown
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    onSignOut(); // Notify App.js
    setAnchorEl(null); // Close the menu
    console.log("User signed out");
  };
  
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: navCon.open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={navCon.drawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: navCon.open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
        <b>Water Billing Software</b>
          
        </Typography>
        <IconButton
          className={classes.toggleIcon}
          color="inherit"
          aria-label="mode"
          onClick={themeContext.toggleTheme}
          edge="start"
        >
          {icon}
        </IconButton>
        
        {/* Profile Icon */}
        <IconButton
          color="inherit"
          className={classes.profileIcon}
          onClick={handleMenuOpen}
        >
          <Badge color="secondary">
            <Avatar alt="User Profile" src="https://res.cloudinary.com/upwork-cloud/video/upload/c_scale,w_1000/v1699115035/catalog/1720835976459624448/s6kgvw34lv9kgktllcy6.JPEG" />
          </Badge>
        </IconButton>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          classes={{ paper: classes.dropdown }}
        >
          <div className={classes.userInfo}>
            <Typography variant="subtitle1">Bhargav Karlapudi</Typography>
            <Typography variant="body2" color="textSecondary">
              Role: <Badge color="primary">Admin</Badge>
            </Typography>
          </div>
          <Divider />
          <MenuItem
            onClick={() => console.log("View Profile")}
            className={classes.dropdownItem}
          >
            <span>View Profile</span>
            <SettingsIcon />
          </MenuItem>
          <MenuItem onClick={handleSignOut} className={classes.dropdownItem}>
            <span>Sign Out</span>
            <ExitToAppIcon />
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
